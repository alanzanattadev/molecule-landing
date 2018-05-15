---
title: Introducing Molecule
author: Gauthier Pogam--Le Montagner
---

## Molecule helps you to find what matters

In its daily life, as a developer, you need to use a lot of different software: Git, Continuous Integration, test library, compiler, linter, static analyser, debugger, data visualizer, and many other kinds of tools… And each of them work differently and use different output format, that you need to learn and understand.

Most of the time, if you don’t have a proper interface, it can be a mess to browse around all the information provided by your tools. Error, warning, or simple hints are mixed in the output, making is sometimes unreadable… And when it’s unreadable, you just ignore it right?

Because we had this problem we decided to create Molecule. Molecule aims to provide a fancy, easy to read, output to the tools you use. By providing an integration to your favourite tools like Jest, Testcafe, or Flow, we’ll be able to enhance their use with our system of plans and diagnostics.

<!--truncate-->

## Let’s create a plan

When you use a tool, for example to run your tests, you usually run it with the same parameter every time, with the same “configuration”. Plans are Molecule’ view of your configuration: it describes how your tests must be run. It includes the executable path, its parameters, the environment variables, if the process should be run locally or on a remote machine…

The biggest advantage of plans is that you just need to create them once for all. The next time you want to run your tests, you just have to launch the corresponding plan and voila! No more repetitive scrolls in your shell history, no more retyping of your commands, everything is there at the end of your mouse. So… Just run it and see what happens!

## Wow, such diagnostics!

When running your tests, what matters for you are problems, failed tests, right? Why would you have all the output about stuff that doesn’t matter?

Diagnostics are your light! They represent the output of your program, with some useful info, such as the severity of the message, the concerned piece of code, when it has been emitted, etc.
Their purpose is to make your life easier. Instead of having a raw block of text that is hard to navigate in, diagnostics are dynamic and you can sort them, expand them to get more details, or filter them by severity.

Searching for a specific file or error is also a common thing. Diagnostics allow to do this easily: you can search them by date, file or error. This allows you to easily find what is important.

But as we thought that displaying the diagnostics was not good enough, we made sure that diagnostics integrate with linters (linter Atom’ package or atom-ide), so Molecule integrate in your existing workflow!

## Give it a try!

Molecule is available right now in Atom package repository and you can install it just by search “molecule” in the plugin list. Install it, and it is now ready to use! Molecule will automatically detect tools that are supported by your project and will display their icon in the dock.

If you want to contribute, you can find the project code on Github. All feedbacks are welcome, and we’ll do our best to use it to improve Molecule.
