'use babel';
// @flow
import React from 'react';
import styled from 'styled-components';

export default styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: ${props => props.margin ? props.margin : '0px'};
`;
