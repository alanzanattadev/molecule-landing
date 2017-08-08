"use babel";
// @flow

import styled from "styled-components";
import { PRIMARY_DARK } from "../nucleons/colors";
import { LogoFont } from "../nucleons/texts";

export default styled.button`
  font-style: ${LogoFont};
  font-size: 16px;
  border: none;
  color: ${PRIMARY_DARK};
  margin: 20px 0px 10px 15px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
