'use babel';
// @flow
import React from 'react';
import Radium from 'radium';
import MailChimpButton from '../atoms/MailChimpButton';
import DownloadButton from '../atoms/DownloadButton';

export default Radium(() => (
  <div style={{
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    paddingBottom: '10px',
    left: '0',
    width: '100%',
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
  }}>
    <MailChimpButton/>
    <DownloadButton/>
  </div>
));
