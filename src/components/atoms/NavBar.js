"use babel";
// @flow

import React from "react";
import Radium from "radium";
import MoleculeLogoName from "./MoleculeLogoName";
import Logo from "./Logo";
import { PRIMARY_DARK } from '../nucleons/colors';
import MoleculeScreenshot from "../atoms/MoleculeScreenshot";
import { boxShadowActive } from "../nucleons/design";
import NavBarButton from "./NavBarButton";
import Bar from "./Bar";

export default Radium(({}) => (
  <Bar>
    <Logo
      style={{
        height: "40px",
        width: "40px",
        marginRight: "10px",
        marginTop: "10px",
        marginLeft: "100px",
        alignItems: "center",
        display: "flex"
      }}
    />
    <MoleculeLogoName />
    <NavBarButton>
      Documentation
    </NavBarButton>
    <NavBarButton>
      Blog
    </NavBarButton>
    <NavBarButton>
      GitHub
    </NavBarButton>
    <NavBarButton>
      Contact Us
    </NavBarButton>
  </Bar>
));
