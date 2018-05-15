---
title: TaskAPI Reference
---

The **TaskAPI** class provides methods allowing to interact with the diagnostics messages, and the activity of the used tools.

## Diagnostics

The **TaskAPI.diagnostic** field has three methods allowing to set the environment for the diagnostics.

### Methods

* **setForPath(publishDiagnostics: PublishDiagnosticsParams)**: assigns diagnostics to a given path.
* **setForWorkspace(publishDiagnostics: PublishDiagnosticsParams)**: sets the path of a project.
* **clearAll()**: clear the diagnostic configuration.

**PublishDiagnosticsParams** is an object type [defined in the LSP specification](https://microsoft.github.io/language-server-protocol/specification#textDocument_publishDiagnostics).

## BusyState

The **TaskAPI.busyState** field allows your tool to tell Molecule whether it's currently working or waiting (usually, waiting for a file to be changed).

### Methods

* **switchToBusyMode()**: notify that the tool is working.
* **switchToWaitingMode()**: notify that the tool stops its activity.

## Cache

In the cache are pushed tool's output strings.

Cached data can be retrieved with **get()** and formated before being displayed.

### Methods

```js
export type CacheBlob = { data: any, time: number, };
```

* **get()**: returns a list of **CacheBlob** objects which contain the data.
* **push(data: any)**: takes data and adds it to the cache list.
