"use babel";
// @flow
import React, { Component } from "react";
import { CenterLayout } from "./../nucleons/layouts";
import DocumentationMenuElement from "./../molecules/DocumentationMenuElement";

const createMenuElements = function(jsonElements) {
  return jsonElements.map(createMenuElement);
};

const createMenuElement = function(jsonElement) {
  return (
    <DocumentationMenuElement
      key={jsonElement.id}
      url={jsonElement.id}
      name={jsonElement.name}
    />
  );
};

class DocumentationMenu extends Component {
  render() {
    return (
      <CenterLayout>
        <ul>
          {createMenuElements(this.props.menuElems)}
        </ul>
      </CenterLayout>
    );
  }
}

export default DocumentationMenu;
