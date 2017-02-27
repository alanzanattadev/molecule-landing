'use babel';
// @flow
import React from 'react';
import styled from 'styled-components';
import {SecondaryRegularFont} from '../nucleons/texts';

export default styled.p`
  font-family: ${SecondaryRegularFont};
  font-size: 20px;
  text-align: ${props => props.centered ? 'center' : 'left'};
  display: flex;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 800px;
  @media screen and (max-width: 800px) {
    max-width: 90vw;
  }
`;
