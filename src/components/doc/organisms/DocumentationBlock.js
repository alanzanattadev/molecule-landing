// @flow
"use babel";

import React, { Component } from "react";
import Markdown from "react-markdown";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import element1 from "./../../../../public/documentMarkdown/Element1.md";
import element2 from "./../../../../public/documentMarkdown/Element2.md";

class DocumentationBlock extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/document" component={Elem1} />
        <Route exact path="/document/elem2" component={Elem2} />
      </Switch>
    );
  }
}

const Elem1 = () => (
  <Markdown source={atob(element1.split("data:text/x-markdown;base64,")[1])} />
);
const Elem2 = () => (
  <Markdown source={atob(element2.split("data:text/x-markdown;base64,")[1])} />
);

export default DocumentationBlock;
