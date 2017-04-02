"use babel";
// @flow

import React from "react";
import Radium from "radium";
import ImplementedIcon from "../atoms/ImplementedIcon";

export default Radium(({ children }: {}) => (
  <div
    style={{
      display: "flex",
      alignItems: 'center',
    }}
  >
    <ImplementedIcon />
    <span style={{
      fontSize: '22px',
    }}>{children}</span>
  </div>
));
