'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import moleculeMask from '../../assets/img/molecule-mask.svg';

export default ({...props}: {}) => (
  <img src={moleculeMask} {...props}/>
);
