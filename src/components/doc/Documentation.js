"use babel";
// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Markdown from "react-markdown";

//import Markdown
import element1 from "./../../../public/documentMarkdown/Element1.md";
import element2 from "./../../../public/documentMarkdown/Element2.md";

import "./Documentation.css";

class Documentation extends Component {
  render() {
    return (
      <div>
        <div className="leftMenu">
          <ul>
            <li><Link to="/document">Element1</Link></li>
            <li><Link to="/document/elem2">Element2</Link></li>
          </ul>
        </div>
        <div className="docContent">
          <Switch>
            <Route exact path="/document" component={Elem1} />
            <Route exact path="/document/elem2" component={Elem2} />
          </Switch>
        </div>
      </div>
    );
  }
}

const Elem1 = () => (
  <Markdown source={atob(element1.split("data:text/x-markdown;base64,")[1])} />
);
const Elem2 = () => (
  <Markdown source={atob(element2.split("data:text/x-markdown;base64,")[1])} />
);

export default Documentation;
