---
title: Create your own Molecule plugin!
author: Gauthier Pogam--Le Montagner
---

When we made Molecule, one of our objectives was to make it extensible so anyone can create a plugin to integrate its favourite tool to Molecule. You’ll probably tell me that any IDE or editor can do that, but have you tried to create a plugin for Eclipse or IntelliJ? If you did, you probably know that it’s not so easy and that you have a lot of things to do by yourself. We wanted to avoid that.

Molecule offer you a simple API which allow you to integrate a plugin in less than 30 minutes while coming with a lot of features, such as linter integration, diagnostics, jump to file, etc... And because nothing is better than a demo, I’ll show you how you can create a plugin by yourself.

<!--truncate-->

For this example, we’ll rewrite the Flow plugin, bundled with Molecule. You can find the code of this example here.

The first thing you need to do when creating a plugin is creating a JavaScript file which will contain the plugin. You have to put it in atom-molecule-dev-environment/lib/ExecutionControlEpic/Plugins/.

The first thing to do is to create the skeleton of our plugin.

https://gist.github.com/Kendos-Kenlen/8b2c0e5e0429ab0656505f73d36ee516#file-flow-plugin-step1-js

As you can see, a plugin is just a JavaScript object that we export and that contains 5 elements. We’ll explain each of them.

First, the “info” field contains the name of the plugin, and the URI of the image to use as plugin icon. This two information will be used to display the tool in the dock of Molecule

The second field is the “configSchema” that will be used by Molecule to build the configuration panel that the user will play with to configure the plugin to its needs. Depending on what is declared in this object, molecule will automatically generate the content of the configuration panel, and will pass all its values to your plugin. Here is a picture of the expected result, and the code used to generate it.

https://gist.github.com/Kendos-Kenlen/8b2c0e5e0429ab0656505f73d36ee516#file-flow-plugin-step2-js

This schema is simple: it contains one field of type “conditional” inside a container field of type “object”. This container field (named “schemas”) is mandatory to all plugin, it’s the root element of the schema and will contains the actual schema displayed to the user.

Inside this element, there is a “binary” element of type “enum”. The enum type allows you to display a drop-down list, here to select which binary (local to the project, or global to the system) should be used. Molecule allows you to specify many types of fields, and you can add more than one field in the schema, check the documentation to see more.
Once we got your schema, we need to write the “getStrategyForPlan()” method. This method is the most important part of our plugin: it’ll contains all the code to define the strategy used to execute our too, as well as all the code needed to handle the outputs of our program. The strategy is an object which describe how Molecule should run the tool. It therefore contains the command path, the working directory and the environment of execution of the tool.

Fortunately, Molecule (and Flow) support the “Language Server Protocol” and greatly facilitate the integration of tools supporting this protocol. If your tool follows the LSP standard, Molecule will natively use this protocol to communicate with the tool and integrate all its features. It’s the best and easiest way to integrate a tool, as linter, jump to file, and diagnostics will be integrated without any need of adaptation.

We therefore just have to specify how to run flow. We’ll use the value of our “binary” field to indicate the path of flow, use the “packageInfo” (a field automatically added by Molecule) directory as working directory, and specify that our tool support the LSP protocol and … that’s it! We have almost finished!

The last two fields to specify are the “DiagnosticView”, which specify the presenter of our diagnostics that will be used when Molecule receive a diagnostic from the tool, as part of the LSP protocol, and the “is Package” field, which define a string or a function used to detect if the tool is enabled for the current project. In the case of flow, we know that if the “.flowconfig” field is present in the project root, then it means that flow is enabled.

That’s it! We integrated flow in Molecule in few minutes and with less than 60 lines of code! And we do all our possible so every plugin is as easy as flow to integrate to Molecule!

You can read our documentation to know more about what is possible when you create a plugin and try to integrate your favorite tool! We welcome every pull request and will be happy to help you making your own plugin, so don’t hesitate to drop us a message or an issue!
