'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import Image from './Image';
import Gif from './Gif'

function getGifOfType(type) {
  switch(type) {
    case "toolbox": return "molecule-toolbox.gif";
    case "target": return "molecule-target.gif";
    case "diagnostics": return "molecule-diagnostics.gif";
    default: return null;
  }
}

function getImgOfType(type) {
  return "molecule-screenshot-main.png";

  switch(type) {
    case "toolbox": return "molecule-toolbox.png";
    case "target": return "molecule-target.png";
    case "diagnostics": return "molecule-diagnostics.png";
    default: return "molecule-screenshot-main.png";
  }
}

export default Radium(function ({type, ...props}: {}) {
  let gif = getGifOfType(type);
  let img = getImgOfType(type);
  if (gif != null)
    return <Gif preview={getImgOfType(type)} gif={getGifOfType(type)} {...props} style={{...props.style}} />;
  else
    return <Image src={getImgOfType(type)} {...props} style={{...props.style}} />;
});
