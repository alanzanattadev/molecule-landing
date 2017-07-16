"use babel";
// @flow

import styled from "styled-components";
import { WHITE } from "../nucleons/colors";

export default styled.div`
  display: flex;
  width: 110%;
  background-color: ${WHITE};
  height: 60px;
  position: fixed;
  z-index: 100;
  -webkit-box-shadow: 3px 6px 3px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 6px 3px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 6px 3px -3px rgba(0, 0, 0, 0.2);
`;
