"use babel";
// @flow

import React, { Component } from "react";
import Markdown from "react-markdown";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import docJson from "./../../../public/docElement.json";

const loadMarkdownFile = function(jsonElements, idMarkdown) {
  let pathMarkdown = jsonElements.find(
    item => item.id.toString() === idMarkdown
  ).path;

  return fetch(process.env.PUBLIC_URL + "/" + pathMarkdown)
    .then(function(response) {
      return response.text();
    })
    .catch(e => console.log(e));
};

class DocumentationBlock extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    loadMarkdownFile(docJson, id).then(mdContent =>
      this.setState({ mdContent: mdContent })
    );
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    loadMarkdownFile(docJson, id).then(mdContent =>
      this.setState({ mdContent: mdContent })
    );
  }

  render() {
    const mdContent = this.state.mdContent;
    if (!mdContent) {
      return null;
    }

    return <Markdown source={mdContent} />;
  }
}

export default () => (
  <Route path="/document/:id" component={DocumentationBlock} />
);
