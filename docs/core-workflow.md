---
title: Workflow
---

# Workflow

## Folders structure

Molecule is made of different parts that are organized under two hierarchical elements: Epics and Features. This terminology comes from Scrum, an agile method. Terminologies can differ depending on scrum implementations, but you can check it on [Atlassian documentation](https://www.atlassian.com/agile/project-management/epics-stories-themes).

Warning: do not be confused between Agile Epics and redux-observables Epics. We'll use the term "Epic" with the Agile meaning here.

### Epic

An Epic is a set of features. We can imagine different parts on an IDE (text edition, tools execution, project management, etc...) and an Epic is related to those big parts. In Molecule we have the lib/ folder which contains the javascript code, and the first folders we see are the epics.

We have many of them:

- EventSystemEpic: which handles the file events
- ExecutionControlEpic: which handles tools execution
- ProjectSystemEpic: which handles management of projects
- GlobalSystem: which links them all together



Each Epic offers then features.

### Features

A feature is a part of an Epic, it's the first unit that would come to your mind if you had to describe what adds Molecule to Atom. "It adds a console, a terminal, etc...".

Features follow all the same folder structure, which is directly related to Flux and specifically Redux.

They can contain:

- Actions: which contains redux action creators
- Reducers: which contains redux reducers
- Selectors: which contains some utils to select data from the related state
- Containers: which contains react components which take data from the state and send them as props
- Presenters: which contains visual components
- Types: which contains consts, flow types and immutable Records
- Fake: which contains fake data for unit testing
- Styles: which contains some variables related to the UI
- Layouts: which contains some old visual components
- AtomLinks: which contains the functions that mount react components (ReactDOM.render) on Atom elements.
- Model: which contains core functions for data management
- Process: which contains files being launched as child processes

## Code & Debug

Let's say you want to add a new feature and that this feature contains a User Interface.

### Storybook

The first thing you'll want to add is your UI. To quickly iterate on the code, we have an integration of storybook in Molecule.

Add a storybook story, and iterate on your components (which will be located in YourFeature/Presenters/). You can find a documentation on [how to write stories](https://storybook.js.org/basics/writing-stories/)

### Unit tests

Once you're confident with the UI, you can start adding the model code. Start with a unit test. We use[ Jest](https://jestjs.io/docs/en/getting-started) in Molecule to handle unit testing.

The first thing you can build is the reducer, which will handle data states. Start by adding unit tests for your new reducer and then code it to pass the tests.

Iterate like this on each parts of your model.

You can also snapshot test your UI components.

### Integration

The model and UI ready, you can start integrating them into Atom, by creating a Container component, and mounting the UI with an AtomLink. 

Launch atom with "atom -d" (development / debug mode) and iterate by coding and reloading Atom after each modification.

### Track down bugs

Bugs can be hard to track down. We provide you several tools to be able to develop with confidence features on Molecule.

The first one is the [redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) . Molecule is already configured for interacting with the devtools.

The second one is our own console. Interactions with language servers, errors coming from tools execution, are all logged in the Molecule console.

The third one is the integrated chrome console of Atom.io.