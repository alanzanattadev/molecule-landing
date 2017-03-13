'use babel';
// @flow

import React from 'react';
import Radium from 'radium';
import Image from './Image';

export default Radium(({shadow = false, ...props}: {shadow: boolean}) => (
  <Image src={shadow ? 'dell-xps-15-shadow.png' : 'dell-xps-15.png'} {...props} style={{...props.style}}/>
));
