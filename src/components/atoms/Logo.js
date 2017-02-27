'use babel';
// @flow
import React from 'react';
import Image from './Image';

export default ({...props}: {}) => (
  <Image src={'molecule-logo.svg'} {...props}/>
);
