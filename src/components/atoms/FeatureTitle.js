'use babel'
// @flow

import styled from 'styled-components';
import { MoonBoldFont } from '../nucleons/texts';
import { PRIMARY_DARK } from '../nucleons/colors';


export default styled.h3`
  font-size: 30px;
  color: ${PRIMARY_DARK};
  font-family: ${MoonBoldFont};
  text-align: center;
`;
