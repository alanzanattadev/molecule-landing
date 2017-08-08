"use babel";
// @flow

import React from "react";
import Radium from "radium";
import MoleculeLogoName from "./MoleculeLogoName";
import Logo from "./Logo";
import NavBarButton from "./NavBarButton";
import Bar from "./Bar";
import Documentation from "../organisms/Documentation";
import App from "../../App";
import {Link} from "react-router-dom";

export default Radium(({}) => (
  <Bar>
    <Logo
      style={{
        width: "40px",
        height: "40px",
        marginRight: "10px",
        marginTop: "10px",
        marginLeft: "100px",
        alignItems: "center",
        display: "flex"
      }}
    />
    <MoleculeLogoName />
    <NavBarButton>
      <Link to="/documentation" style={{ textDecoration: 'none' }}>Documentation</Link>
    </NavBarButton>
    <NavBarButton>
      <Link to="blog" style={{ textDecoration: 'none' }}>Blog</Link>
    </NavBarButton>
    <NavBarButton>
      <a href="https://github.com/alanzanattadev/atom-molecule-dev-environment" style={{ textDecoration: 'none' }}>GitHub</a>
    </NavBarButton>
    <NavBarButton>
      <Link to="contactus" style={{ textDecoration: 'none' }}>Contact Us</Link>
    </NavBarButton>
  </Bar>
));
