'use babel';
// @flow

import React from 'react';
import Radium from 'radium';
import {MAGENTA, WHITE, PINK} from '../nucleons/colors';
import {PrimaryBoldFont} from '../nucleons/texts';

export default Radium(() => (
  <a href="https://github.com/alanzanattadev/atom-molecule-dev-environment" target="_blank" style={{
    backgroundColor: MAGENTA,
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '10px',
    color: WHITE,
    fontFamily: PrimaryBoldFont,
    transition: 'background-color 0.2s',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: PINK
    }
  }}>
    Get Molecule
  </a>
));
