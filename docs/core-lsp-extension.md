---
title: LSP Extension
---

Molecule uses extensively the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/). It has its own implementation based on [vscode-jsonrpc](https://www.npmjs.com/package/vscode-jsonrpc). LSP is used through the whole execution pipeline, from the core to the actual language server.

## LSP for communicating with language servers

The Language Server Protocol has been created to communicate with tools called "Language servers". Those servers are made to provide a language integration on an Integrated Development Environment, without having the IDE to implement itself each language features (diagnostics, jump-to-definition, outlines, ...). The IDE only has to integrate the json-rpc based protocol and act as a client of the language server, thus sending text editing events to it, and displaying results.

Molecule provides this integration, and so send to the language server what it expects.

## Remote design

Molecule is made to enhance developer experience on [Atom.io](http://atom.io). One of the features Molecule aims to provide is the remote development. Remote development is a workflow, typically used in computational intensive applications development, defined by the use of a server which acts as the development environment, and a thin client that provides an editor for the developer to work with. When the developer edits files, the files are built, tested and ran on the remote server, for high performances and architecture compatibility.  Facebook talks about [its use of remote development](https://code.fb.com/developer-tools/building-nuclide-a-unified-developer-experience/).

To provide such capabilities on Molecule, we created an execution pipeline that can communicate to a remote machine and executes any tool remotely. The pipeline uses json-rpc to communicate from the Molecule Core to the remote machine handler called the Molecule Controller. Every LSP message is transferred through the controller, and proxied to language servers.

The Controller acts as a proxy, and thus processes every message before actually transferring it. When the running tool is a language server, most of the messages are just transferred, but it's not always the case.

## LSP for communicating with traditional tools

Molecule can run many tools, including language servers, but a lot of them are actually of another kind. Whether they are build tools, unit test tools, dependency managers or DevOps tools they are ran the same way. When the Controller executes a non-language server tool, it doesn't transfer its LSP messages to it. Instead, it processes the message and interacts differently with the tool. The same applies for messages coming from the running tool (output).

The Language Server Protocol is powerful, but isn't meant to be used with other kind of tools. This is where we needed an extension to be able to work the same way with traditional tools than with language servers.

If the tool doesn't output json respecting the LSP, how are we supposed to transfer the content back to the Molecule Core through the pipeline ?

## Our extension of LSP

We created several new types of messages, which allow the Molecule Core to send and receive other kind of messages to and from the Molecule Controller.

### Strategy

The strategy is created by the plugin, and this is run on the remote machine for developer experience ease. The Core has to know the strategy being executed to initialize the terminal or other interface elements.

We created the message type strategy/init for this purpose, it contains the strategy which has to be initialized.

### Terminal

The first issue we had, was to manage the output and the input of a tool which is usually aimed to be ran in a terminal. Indeed, this kind of tool has a non-readable output (ansi codes are blurring the output), and so the content has to be directly transferred to a terminal implementation developer side (and so Molecule Core side).

We created two new messages: terminal/input and terminal/output which both embed raw data.

The second issue was the handling of the terminal resize developer side, and the update tool-side of this resize. In fact, terminal tool are run the same way on the remote machine than in a terminal, with a pty. This pty has to be updated when a resize occurs, and so the Controller has to do it. To be able to achieve that, it has to be notified when this occurs.

We created a new kind of message: terminal/resize, this message embeds the new size of the terminal.

### Workspace

LSP defines clearly how to process diagnostics linked to a file, but doesn't give any clue on how to handle diagnostics of a project. For example, when I run an integration test (or end-to-end test), with which file the error diagnostic is supposed to be linked ? In this scenario, the error diagnostic is associated with the project and not with a file.

To support this type of tools, we added two types of messages that allow us to work with projects diagnostics: workspace/publishDiagnostics and workspace/clearDiagnostics. They embed the project path.

Another feature which we find useful (and is implemented in many IDE) is what we call the "busy state". This feature aims to display to the developer an indicator when a tool is processing. Busy state is not defined in the LSP, and so we created workspace/busy messages to notify whether the running tool is processing or not.

### Package

Because the remote design forces Molecule to have a file watcher on the remote machine, we had to transfer the package detection on the remote machine as well. To notify the Molecule Core of a new package or a change, we created the packages/didChange message type.

## The Core idea

In the end you can imagine the pipeline as a big json-rpc flux, in which you have LSP messages, and other new messages. This flux starts from the developer (Core), has filters (Controller) and ends at the process (running tool).
