'use babel';
// @flow

import React from 'react';
import Radium from 'radium';
import Image from './Image';

function getImgOfType(type) {
  switch(type) {
  case 'toolbox': return 'molecule-toolbox.gif';
  case 'target': return 'molecule-target.gif';
  case 'diagnostics': return 'molecule-diagnostics.gif';
  default: return 'molecule-screenshot-main.png';
  }
}

export default Radium(({type, ...props}: {type: string}) => (
  <Image src={getImgOfType(type)} {...props} style={{...props.style}}/>
));
