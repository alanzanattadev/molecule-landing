'use babel';
// @flow
import React from 'react';
import styled from 'styled-components';
import WayPoint from './WayPoint';

const AnimationLayout = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  flex-direction: column;
  transition: 1s all;
  opacity: ${({visible = false}) => visible ? '1' : '0'};
  transform: translate3d(0, ${({visible = false}) => visible ? '0' : '50px'}, 0);
`;

export default WayPoint(props => <AnimationLayout ref={props.handleRef} {...props}/>);
