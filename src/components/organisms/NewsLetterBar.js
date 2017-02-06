'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import {LIGHT_GREY} from '../nucleons/colors';
import MailChimpButton from '../atoms/MailChimpButton';

export default Radium(({children}: {}) => (
  <div style={{
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
  }}>
    <MailChimpButton/>
  </div>
));
