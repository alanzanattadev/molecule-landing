'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import {SAND} from '../nucleons/colors';

export default Radium(({href, blank, children, ...props}: {}) => (
  <a {...props} href={href} target={blank ? '_blank' : undefined} style={{color: SAND, textDecoration: 'none', ...props.style}}>{children}</a>
));
