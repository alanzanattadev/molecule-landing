"use babel";
// @flow

import React from "react";
import Radium from "radium";
import MoleculeLogoName from "./MoleculeLogoName";
import Logo from "./Logo";

export default Radium(({}) => (
  <div
    style={{
      display: "flex",
      height: "60px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    }}
  >
    <Logo
      style={{
        height: "40px",
        width: "40px",
        marginRight: "10px",
        marginTop: "5px",
      }}
    />
    <MoleculeLogoName />
  </div>
));
