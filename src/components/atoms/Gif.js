'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import GifPlayer from 'react-gif-player';

export default Radium(({preview, gif, ...props}: {}) => (
  <GifPlayer gif={`https://s3.eu-central-1.amazonaws.com/moleculeide/static/assets/img/${gif}`}
             still={`https://s3.eu-central-1.amazonaws.com/moleculeide/static/assets/img/${preview}`}
             {...props} />
));
