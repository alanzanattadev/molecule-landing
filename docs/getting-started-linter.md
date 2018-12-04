---
title: Linter Integration
---

Linter Integration
==================

When writing code, most developers like to see problems and code smells directly
in their code, without switching to an external window or panel.

If you have a **linter package** ([linter](https://atom.io/packages/linter) or
[atom-ide-ui](https://atom.io/packages/atom-ide-ui)), Molecule automatically becomes a
provider, allowing you to see diagnostics directly in the code, by highlighting the
relevant piece of code.

How to enable the linter?
-------------------------

You must have installed the [linter](https://atom.io/packages/linter) or 
[atom-ide-ui](https://atom.io/packages/atom-ide-ui) package in order to enable the
linting features of Molecule.

You can install these packages directly from atom as any other package.

Linter Integration
------------------

Once enabled, Molecule will provide diagnostics to the linter plugin you installed.

To work with the linter, a [Molecule' plugin](getting-started-bundled-plugins.md)
needs to provide relevant information about your code through
[a plan](getting-started-using-a-plan.md): they need to indicate which
lines are concerned as well as the file name.

Most plugins that interact with the code (static analysis, unit test, code linters) provide
them and you'll be able to see their diagnostics directly into the code.

For more details about how the linter works, please refer to the documentation
of your linter package.
