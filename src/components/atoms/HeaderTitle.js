'use babel';
// @flow

import styled from 'styled-components';
import {WHITE} from '../nucleons/colors';
import {PrimaryLightFont} from '../nucleons/texts';

export default styled.h1`
  font-family: ${PrimaryLightFont};
  font-size: 50px;
  font-weight: 100;
  color: ${WHITE};
  margin: 80px 20px 80px 20px;
  text-align: center;
`;
