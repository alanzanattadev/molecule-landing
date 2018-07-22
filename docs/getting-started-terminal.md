---
title: Terminal Integration
---

**Warning:** This is an experimental feature that is still under development and
might contains bugs, missing features, or does not work under certain circumstances.

Molecule integrates a terminal in the [Control Panel](getting-started-using-a-plan.md)
letting you accessing your shell directly from Molecule without using an external program.

You can create a terminal by clicking on the **New terminal** button under the project name.
This will create a new terminal instance that will be listed above the **New terminal** button,
along with all previously created terminals.

The terminal uses your default shell as an interactive shell and therefore provides all
usual features you can enjoy in your shell.

Limitations
-----------

The terminal integration currently has some limitations:

- Common keyboard shortcuts such as copy or past are not yet available. Only basic shortcuts
such as `CTRL+C` or `CTRL+D` are available.
- Once created, a terminal cannot be closed. After exiting shell, the terminal will
remain open in read-only mode.
- There is no way to choose the shell to open and the terminal will simply open the default
user shell.
