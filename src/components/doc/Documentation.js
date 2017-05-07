"use babel";
// @flow
import React, { Component } from "react";
import {
  ScrollableLayout,
  CenterLayout,
  VerticalLayout,
  StretchLayout
} from "./../nucleons/layouts";
import DocumentationMenu from "./organisms/DocumentationMenu"
import DocumentationBlock from "./organisms/DocumentationBlock"

class Documentation extends Component {
  render() {
    return (
      <VerticalLayout>
        <DocumentationMenu/>
        <CenterLayout>
          <DocumentationBlock />
        </CenterLayout>
      </VerticalLayout>
    );
  }
}

export default Documentation;
