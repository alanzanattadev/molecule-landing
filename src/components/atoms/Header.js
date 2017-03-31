'use babel';
// @flow

import styled from 'styled-components';
import {PRIMARY_DARK, PINK, WHITE} from '../nucleons/colors';

export default styled.header`
  background: linear-gradient(-59deg, ${PINK}, ${PRIMARY_DARK});
  overflow: hidden;
  position: relative;
  &:before {
    height: 45vh;
    width: 130vw;
    border-bottom: solid 30vh ${WHITE};
    border-radius: 0% 0% 100% 100%;
    margin-top: -50px;
    position: absolute;
    background-color: transparent;
    bottom: -20vh;
    left: -15vw;
    right: 0;
    content: '';
  }
`;

export const HeaderDeltaPart = styled.section`
  height: 7vh;
  background-color: ${WHITE};
  align-items: stretch;
  display: flex;
`;
