"use babel";
// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";


class DocumentationMenuElement extends Component {
  render() {
    return (
      <li><Link to={"/document/" + this.props.url}>{this.props.name}</Link></li>
    );
  }
}

export default DocumentationMenuElement;
