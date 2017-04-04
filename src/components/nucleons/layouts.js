'use babel';
// @flow

import styled from 'styled-components';

export const BaseLayout = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  z-index: ${props => props.zIndex || '0'};
  overflow: ${props => props.overflow || 'hidden'};
  box-shadow: ${props => props.boxShadow || 'none'};
  border: ${props => props.border || '0px'};
  border-radius: ${props => props.borderRadius || '0px'};
  height: ${props => props.height};
  width: ${props => props.width};
  min-height: ${props => props.minHeight};
  min-width: ${props => props.minWidth};
  background-color: ${props => props.backgroundColor};
`;

export const HorizontalLayout = styled(BaseLayout)`
  flex-direction: row;
  align-items: ${props => props.aligned ? 'center' : 'stretch'};
  flex-grow: ${props => props.stretched ? '1' : undefined};
`;

export const VerticalLayout = styled(BaseLayout)`
  flex-direction: column;
  align-items: stretch;
`;

export const FullSizeLayout = styled(HorizontalLayout)`
  width: 100%;
  width: 100vw;
`;


export const FixedLayout = styled(HorizontalLayout)`
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const StretchLayout = styled(VerticalLayout)`
  flex: 1;
  align-items: stretch;
`;


export const CenterLayout = styled(HorizontalLayout)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ScrollableLayout = styled(StretchLayout)`
  overflow: auto;
`;
