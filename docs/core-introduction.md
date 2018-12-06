---
title: Introduction
---

# Introduction

This documentation is intended for new Molecule contributors, either new team
members or regular users who'd like to add small features to improve their
coding experience.

It should give you a general idea of how the project works, and how you can work
on it.

## Download code

The first step to contribute to Molecule is to download the code from Github.
Run the following commands on your terminal:

``` sh
git clone https://github.com/alanzanattadev/atom-molecule-dev-environment.git
cd atom-molecule-dev-environment
```

Then, install Molecule in
[development mode](https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core/#running-in-development-mode),
using the `apm` command line, and run Atom in dev mode.

``` sh
npm install
apm link -d
atom --dev
```

> Note: We recommend you uninstall Molecule before installing it in dev mode.
> Atom sometimes produces hard-to-track bugs when a package is installed both
> in normal mode and in dev mode.

## Writing your change

Whether you want to write a new feature or patch an existing one, the Molecule
codebase provides you with tools to help with your development cycle.

### Storybook

The first thing you might want to add is a new UI. To help you quickly iterate
on your UI code, Molecule integrates [Storybooks](https://storybook.js.org).

Add a storybook story, and iterate on your
[React Components](./core-workflow.md#react-and-redux). For more details, read
[the documentation on writing stories](https://storybook.js.org/basics/writing-stories/).

### Unit tests

We recommend you adopt a test-driven approach. Contributions are much more
likely to be integrated into Molecule if they're bundled with self-explanatory
unit tests.

Molecule uses [Jest](https://jestjs.io/docs/en/getting-started) to run unit
tests. If you're unsure how to best write tests, we recommend you use existing
tests as a reference (eg: [GeneratePlans](https://github.com/alanzanattadev/atom-molecule-dev-environment/tree/master/lib/ProjectSystemEpic/PackageFeature/Epics/GeneratePlans.test.js)).

### Running your code

When you want to run your code to see your changes, start atom in dev mode. Note
that atom uses the code in the `build/` folder, which is produced by
[Babel](https://babeljs.io/).

``` sh
yarn babel:watch
# Another terminal
atom --dev
```

You might want to inspect your code using Chrome Devtools. Atom provides the
default set of tools, to which Molecule adds
[React Devtools](https://github.com/facebook/react-devtools/blob/master/packages/react-devtools/README.md)
and [Remote Redux Devtools](https://github.com/zalmoxisus/remote-redux-devtools)
support. You can use them to inspect the values of your data structures.

Data relating to the regular execution of Molecule is logged in the
[Molecule Console](./getting-started-console.md).

## Pushing your change

### Test your code

Before your changes can be integrated into Molecule, they have to pass a minimum
set of requirements, tested automatically on the Github CI:

* No [Eslint](https://eslint.org/) errors.
 * Respecting [Prettier](https://prettier.io/) formatting.
* No failed unit tests.

Run `npm test` to check that your changes don't introduce new errors.

> Note: In the future, we will also require that contribution don't have
> [Flowtype](https://flow.org/) errors.

### Write a Pull Request

Molecule integrates changes to its codebase through
[Github Pull Requests](https://help.github.com/articles/about-pull-requests/). Once your feature or path is complete, submit a PR
and will we get back to you as soon as we can.
