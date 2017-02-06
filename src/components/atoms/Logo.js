'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import moleculeLogo from '../../assets/img/molecule-logo.svg';

export default ({...props}: {}) => (
  <img src={moleculeLogo} {...props}/>
);
