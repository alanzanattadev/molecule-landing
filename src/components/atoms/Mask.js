'use babel'
// @flow

import React from 'react';
import Image from './Image';
import Radium from 'radium';

export default ({...props}: {}) => (
  <Image src={"molecule-mask.svg"} {...props}/>
);
