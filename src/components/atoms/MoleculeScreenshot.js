'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import moleculeScreenshotMain from '../../assets/img/molecule-screenshot-main.png';
import moleculeTarget from '../../assets/img/molecule-target.gif';
import moleculeDiagnostics from '../../assets/img/molecule-diagnostics.gif';
import moleculeToolbox from '../../assets/img/molecule-toolbox.gif';

function getImgOfType(type) {
  switch(type) {
    case "toolbox": return moleculeToolbox;
    case "target": return moleculeTarget;
    case "diagnostics": return moleculeDiagnostics;
    default: return moleculeScreenshotMain;
  }
}

export default Radium(({type, ...props}: {}) => (
  <img src={getImgOfType(type)} {...props} style={{...props.style}}/>
));
