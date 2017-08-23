"use babel";
// @flow

import React, { Component } from "react";
import {
  ScrollableLayout,
  CenterLayout,
  VerticalLayout,
  StretchLayout
} from "./../nucleons/layouts";
import DocumentationMenu from "./../organisms/DocumentationMenu";
import DocumentationBlock from "./../organisms/DocumentationBlock";
import docJson from "./../../../public/docElement.json";

class Documentation extends Component {
  render() {
    return (
      <VerticalLayout>
        <DocumentationMenu menuElems={docJson} />
        <CenterLayout>
          <DocumentationBlock />
        </CenterLayout>
      </VerticalLayout>
    );
  }
}

export default Documentation;
