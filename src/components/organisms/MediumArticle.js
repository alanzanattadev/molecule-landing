"use babel";
// @flow

import React from "react";
import Radium from "radium";
import { VerticalLayout } from "../nucleons/layouts";

export default Radium(({ title, description, link }: {}) => (
  <VerticalLayout
    backgroundColor="white"
    border="1px solid rgba(0, 0, 0, 0.0901961)"
    padding="20px"
    boxShadow="0 1px 4px rgba(0,0,0,.04)"
    onClick={() => {
      const win = window.open(link, "_blank");
      win.focus();
    }}
    margin="10px"
    maxWidth="600px"
  >
    <h3
      style={{
        color: "rgba(0,0,0,.8)",
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: "-.022em",
        padding: "0px",
        margin: "0px",
        overflowWrap: 'wrap',
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "18px",
        overflowWrap: 'wrap',
      }}
    >
      {description}
    </p>
    <a
      style={{
        textDecoration: "none",
        fontSize: "12px",
        color: "rgba(0,0,0,.44)",
      }}
    >
      Read more...
    </a>
  </VerticalLayout>
));
