"use babel";
// @flow

import React from "react";
import { withState, lifecycle } from "recompose";
import axios from "axios";

export default function(
  {
    max = 3,
    url = "https://raw.githubusercontent.com/alanzanattadev/atom-molecule-dev-environment/master/CHANGELOG.md",
  } = {},
) {
  return function(Comp) {
    return withState("changelogs", "setChangelogs", null)(
      lifecycle({
        componentDidMount() {
          axios
            .get(url)
            .then(response => {
              console.log(response, response.data);
              const changelogs = response.data
                .split(/^\#\#\s/m)
                .map(changelog => `## ${changelog}`)
                .filter(changelog => changelog.match(/^\s*$/m))
                .slice(0, max);
              this.props.setChangelogs(changelogs);
            })
            .catch(error => {
              console.log(error);
            });
        },
      })(Comp),
    );
  };
}
