"use babel";
// @flow
import React, { Component } from "react";
import { CenterLayout } from "./../../nucleons/layouts";
import DocumentationMenuElement from "./../molecules/DocumentationMenuElement"

class DocumentationMenu extends Component {
  render() {
    return (
      <CenterLayout>
        <ul>
          <DocumentationMenuElement url="" name="Element1"/>
          <DocumentationMenuElement url="elem2" name="Element2"/>
        </ul>
      </CenterLayout>
    );
  }
}

export default DocumentationMenu;
