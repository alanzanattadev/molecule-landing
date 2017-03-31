"use babel";
// @flow

import styled from "styled-components";
import { WHITE } from "../nucleons/colors";
import { hiDPI } from "polished";
import { PrimaryLightFont } from "../nucleons/texts";

export default styled.h1`
  font-family: ${PrimaryLightFont};
  font-size: 60px;
  font-weight: 100;
  color: ${WHITE};
  margin: 80px 20px 80px 20px;
  text-align: center;
  @media only screen
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 37px;
  }
`;
