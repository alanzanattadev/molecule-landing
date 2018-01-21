---
id: taskAPI
title: Task API Documentation
sidebar_label: Task API
---

TaskAPI contains three fields/objects with their own functionalities.
The taskAPI provides methods allowing to interact with the diagnostics messages, and the activity of the used tools.

## Diagnostics
The diagnostic object has three methods allowing to set the environment for the diagnostics.

### Methods

* **setForPath(PublishDiagnostics: PublishDiagnosticsParams)** return a void, assigns diagnostics to a given path.
* **setForWorkspace(PublishDiagnostics: PublishDiagnosticsParams)** return a void, sets the path of a project.
* **clearAll()** return a void, clear the diagnostic configuration.

## BusyState

The busyState object allows to update the status of a tool.
There is two modes, the busy and waiting mode.
This object is for tools that can work continually on background.

### Methods

* **switchToBusyMode()** return a void, notify that the tool is working.
* **switchToWaitingMode()** return a void, notify that the tool stops its activity.

## Cache
In the cache are pushed tool's output strings to display them in the wanted format.

### Methods

`̀ ̀ export type CacheBlob = { data: any, time: number, };`̀ ̀

* **get()** return a list of CacheBlob
* **push(data: any)** return a void, this method take a data and add it in the cache list returned by the get() method.
