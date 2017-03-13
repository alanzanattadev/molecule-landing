'use babel';
// @flow

import React from 'react';
import Radium from 'radium';
import Image from './Image';

export default Radium(({...props}: {}) => (
  <Image src={'molecule-mask.svg'} {...props}/>
));
