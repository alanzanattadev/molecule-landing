'use babel';
// @flow
import React from 'react';
import Radium from 'radium';

export default Radium(({src, ...props}: {}) => (
  <img src={`https://s3.eu-central-1.amazonaws.com/moleculeide/static/assets/img/${src}`} {...props}/>
));
