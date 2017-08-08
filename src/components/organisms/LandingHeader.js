"use babel";
// @flow
import React from "react";
import Radium from "radium";
import Header, { HeaderDeltaPart } from "../atoms/Header";
import { StretchLayout, CenterLayout } from "../nucleons/layouts";
import MoleculeScreenshot from "../atoms/MoleculeScreenshot";
import { boxShadowActive } from "../nucleons/design";
import HeaderTitle from "../atoms/HeaderTitle";
import NavBar from "../atoms/NavBar";

export default Radium(() => (
  <StretchLayout>
    <Header>
      <NavBar />
      <HeaderTitle>
        Centralize your tooling & focus on what matters
      </HeaderTitle>
      <CenterLayout stretched>
        <MoleculeScreenshot
          style={{
            maxWidth: "90vw",
            zIndex: "7",
            height: "auto",
            width: "auto",
            boxShadow: boxShadowActive,
            '@media screen and (min-width: 870px)': {
              maxWidth: '850px',
            }
          }}
        />
      </CenterLayout>
    </Header>
    <HeaderDeltaPart>
      <StretchLayout />
    </HeaderDeltaPart>
  </StretchLayout>
));
