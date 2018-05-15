---
title: HelperAPI Reference
---

The **HelperAPI** class provides methods to facilitate your development.

## Methods

* **HelperApi.outputToHTML(output)**: This method will transform your output into an HTML string.

* **HelperApi.json.parseAsync(json)**: This method will read a JSON and return you a `Promise<Object>`.

* **HelperApi.fs.getTmpPath(fileName)**: This method takes the filename of a temporary file used by your plugin as argument and the path to the temporary file. The path return will depend of the OS temporary folder who run Molecule.

## Severity

The HelperAPI provides you an object containing all the different levels of severity used by the diagnostics.

* **HelperApi.severity**: Below are listed the different levels of severity

``` js
severity: {
  error: 1,
  warning: 2,
  info: 3,
  hint: 4,
  success: 5,
},
```

## Examples

``` js
// Use of the helperAPI on jest plugin
getStrategyForPlan(plan: PlanConfig, helperApi: HelperAPI) {
  let tpmPath = helperAPI.fs.getTmpPath(`jest-${plan.name}.output.json`);
  let command = `${
    binaryPath
  } --json --useStderr --silent --outputFile ${tpmPath}`;

  // ...
}
```

``` js
// Use of the helperAPI on npm plugin
controller: {
  onData(data: string, taskAPI: TaskAPI, helperAPI: HelperApi): void {
    taskAPI.addDiagnostics({
      uri: "npm",
      diagnostics: [{
        severity: helperAPI.severity.info, //display the right style for the diagnostic
        message: helperAPI.outputToHTML(data.toString()) ,//display the message in HTML
        date: moment().unix(),
      }],
    });
  },
  // ...
}
```
