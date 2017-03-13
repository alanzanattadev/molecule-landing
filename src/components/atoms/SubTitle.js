'use babel';
// @flow

import styled from 'styled-components';
import {PrimaryBoldFont} from '../nucleons/texts';
import {DARK_GREY} from '../nucleons/colors';

export default styled.h2`
  font-family: ${PrimaryBoldFont};
  font-size: 30px;
  color: ${DARK_GREY};
  display: flex;
  white-space: normal;
  max-width: 100vw;
  text-align: ${props => props.centered ? 'center' : 'left'};
`;
