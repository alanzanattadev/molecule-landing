'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import dellXps15 from '../../assets/img/dell-xps-15.png';
import dellXps15Shadow from '../../assets/img/dell-xps-15-shadow.png';

export default Radium(({shadow = false, ...props}: {}) => (
  <img src={shadow ? dellXps15Shadow : dellXps15} {...props} style={{...props.style}}/>
));
