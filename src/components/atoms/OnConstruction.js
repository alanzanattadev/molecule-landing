"use babel";
// @flow

import React, { Component } from "react";
import Radium from "radium";
import Header, { HeaderDeltaPart } from "../atoms/Header";
import { StretchLayout} from "../nucleons/layouts";
import { boxShadowActive } from "../nucleons/design";
import HeaderTitle from "../atoms/HeaderTitle";
import NavBar from "../atoms/NavBar";

export default Radium(({}) => (
  <StretchLayout>
    <Header>
      <NavBar />
      <HeaderTitle>
        Page on construction
      </HeaderTitle>
    </Header>
    <HeaderDeltaPart>
      <StretchLayout />
    </HeaderDeltaPart>
  </StretchLayout>
));
