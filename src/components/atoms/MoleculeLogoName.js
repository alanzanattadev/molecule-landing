"use babel";
// @flow

import React from "react";
import Radium from "radium";
import { LogoFont } from "../nucleons/texts";
import { PRIMARY_DARK } from '../nucleons/colors';

export default Radium(({}) => (
  <span
    style={{
      fontFamily: LogoFont,
      fontSize: "35px",
      color: PRIMARY_DARK,
      alignItems: "center",
      display: "flex",
      marginTop: '10px',
      marginRight: '15px',
      textAlign: "center",
    }}
  >
    Molecule
  </span>
));
