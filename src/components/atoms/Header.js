'use babel';
// @flow

import styled from 'styled-components';
import {PRIMARY_DARK, PINK, WHITE, LIGHT_GREY, DARK_GREY} from '../nucleons/colors';

// background: linear-gradient(-59deg, ${LIGHT_GREY}, ${DARK_GREY});

export default styled.header`
  background: linear-gradient(-59deg, ${PINK}, ${PRIMARY_DARK});
  overflow: hidden;
  position: relative;
  &:before {
    height: 45vh;
    width: 130vw;
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
