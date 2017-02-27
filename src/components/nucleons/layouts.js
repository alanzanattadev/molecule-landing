'use babel';
// @flow
import React from 'react';
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
  height: 100vh;
  width: 100%;
  width: 100vw;
`;

export const RelativeLayout = styled(HorizontalLayout)`
  position: relative;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const AbsoluteLayout = styled(HorizontalLayout)`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const FixedLayout = styled(HorizontalLayout)`
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const OverlayLayout = styled(props => (
  <FixedLayout top={'0px'} left={'0px'}>
    <FullSizeLayout {...props}>
      {props.children}
    </FullSizeLayout>
  </FixedLayout>
))`
  background-color: ${props => props.backgroundColor};
`;

export const StretchLayout = styled(VerticalLayout)`
  flex: 1;
  align-items: stretch;
`;

export const VerticalEndLayout = styled(VerticalLayout)`
  align-items: flex-end;
`;

export const CenterLayout = styled(HorizontalLayout)`
  justify-content: center;
  align-items: center;
`;

export const ScrollableLayout = styled(StretchLayout)`
  overflow: auto;
`;

export const SpacingLayout = styled(props => props.column || props.vertical ? <VerticalLayout {...props}/> : <HorizontalLayout {...props}/>)`
  justify-content: ${props => props.around ? 'space-around' : 'space-between'};
`;

export const EndLayout = styled(HorizontalLayout)`
  justify-content: flex-end;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  flex-shrink: 0;
  flex-grow: ${props => props.stretch ? '1' : '0'};
  align-items: ${props => props.aligned ? 'center' : 'stretch'};
  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0'};

`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;

`;

export const ListLayout = ({
  items = [],
  mapItemToKey = () => undefined,
  mapItemToComponent = () => null,
  containerStyle = {},
  itemStyle = {},
  mapPropsToEmptyComponent = () => null,
  mapItemToSeparator = (item) => null,
  useSeparator = (i, length, item) => (i < length - 1),
  ...props
}) => (
  <ListContainer {...containerStyle}>
    {items.map((item, i) => (
      <ListItem {...itemStyle} key={mapItemToKey(item)} className={mapItemToKey(item)}>
        {mapItemToComponent(item, props)}
        {useSeparator(i, items.length, item) && mapItemToSeparator(item, props)}
      </ListItem>
    ))}
    {items.length == 0 && mapPropsToEmptyComponent(props)}
  </ListContainer>
);
