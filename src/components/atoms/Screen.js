'use babel';
// @flow

import styled from 'styled-components';

export default styled.section`
  minHeight: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: ${props => props.margin ? props.margin : '0px'};
`;
