---
id: pluginCreator
title: Plugin Creator Documentation
sidebar_label: Create a Plugin
---

### New Plugin

To create a new plugin you must create a new javascript module in the plugin folder that export by default the object of your plugin.

### Information

To give a name and an icon to your plugin molecule use an `infos` object.
Which require a field `name`(string) and a field `iconUri`(uri).

Example:
--------
```
export default{
  infos: {
    name: "sample",
    iconUri: "atom://molecule-dev-environment/.storybook/public/sample.svg",
  },
};
```

### ConfigSchema

To create your config panel Molecule use a `configSchema` object. For every element you want to create on the configPanel you must set a `type`(string) element then add the requirements.
The different type of objects you can use in configPanel are the following.
- __enum:__ this type will create a select menu with different option. The options of the selector must be define in an `enum` array of object with 2 elements on `value`(string) (value of the input) and `description`(string)(the text that will be displayed). You can set a label to this object with the element `label`(string).
- __file:__ This type will create an input file.
- __string:__ This type will create text input. This type also have 3 non mendatory attributes: `default`(string) to set a default value, `placeholder`(string) to set a placeholder and `title`(string) to change the label of this input.
- __number:__ This type will create number input. This type also have 3 non mendatory attributes: `default`(string) to set a default value, `placeholder`(string) to set a placeholder and `title`(string) to change the label of this input.
- __boolean:__ This type will create a checkbox. This type have two attributes: `title`(string) to set a text aside your checkbox and `default`(boolean) to check or uncheck the checkbox by default.
- __array:__ This type will allow you to create an array of type. The use will be able to create as many elements of the type declared to configure the plugin. The type you want to multiply must be store on an `items` object.
- __object:__ This type allow you to create groupement of other type of the configSchema. You need to set `title`(string) element then you can store all the other type on an object.
- __conditional:__ This type allow you to display or not different element in the configPanel. You need to set an element `default`(string) to chose the state you want to display by default. An object `expression` will be used to define the condition you want to aplay. Then you will need a `case` object to display the different output. To define each case you will create an object who the name will be the case, then this object containt all the element you want to display in that case. This object can be null if you don't want to display anything.

Example:
--------
```
export default{
  infos: {
    name: "sample",
    iconUri: "atom://molecule-dev-environment/.storybook/public/sample.svg",
  },
  configSchema: {
    type: "conditional",
    default: "nothing",
    expression: {
      type: "enum",
      enum: [
        { value: "nothing", description: "Display nothing" },
        { value: "something", description: "Display an input string and an input number" },
        { value: "another", description: "Display a checkbox and an array" },
      ],
    },
    case: {
      nothing: null,
      something: {
        type: "object",
        someoptions: {
          stringexample: {
            type: "string",
            title: "sampletext",
            default: "text here",
            placeholder: "classic placeholder",
          },
          numberexample: {
            type: "number",
            title: "phone number",
            placeholder: "0102030405",
          },
        },
      },
      another: {
        type: "object",
        anotheroption: {
          booleanexample: {
            type: "boolean",
            title: "dev mod",
            default: false,
          },
          arrayexample: {
            type: "array",
            items: {
              type: "string",
              title: "environment variable",
              placeholder: "EXAMPLE=12",
            },
          },
        },
      },
    },
  },
};
```
