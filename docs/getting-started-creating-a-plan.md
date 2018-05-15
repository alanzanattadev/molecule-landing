---
title: Creating a plan
---

To create a new plan for a plugin, click the "New plan" button, under this
plugin. The plan configuration interface should open in the Control Panel.

This interface displays a list of settings specific to each plugin. You can
tweak the settings' values, then click the green **Create** button at the bottom
to add a plan.

For this tutorial, we will create an eslint plan:

- Click the **New plan** button under the "eslint" plugin
- Set name to "eslint_0",
- Leave the other settings as-is
- Click the **Create** button.

![Create eslint plan](assets/create-eslint-0.png)

A new plan named "eslint_0" should have appeared in the Plugin Subpanel.

![After eslint plan is added](assets/eslint-0-added.png)

You can click on the Play button, which will run `eslint` and start giving you diagnostics.

### Package

When creating a new plan, one of the configuration settings for all plugins is
**package**. If the project includes several package files for the current plugin
(for instance, if the project has several folders with `package.json` files
when creating an Eslint plan), then the **package** setting allows you to choose
which package the plan will use.

![Package setting closeup](assets/package-closeup.png)
