'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import SingleFeature from '../molecules/SingleFeature';

export default Radium(({features}: {features: Array<string>}) => (
  <ul style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    {features.map(feature => (
      <li key={feature} style={{listStyle: 'none', margin: '10px 0px'}}>
        <SingleFeature>{feature}</SingleFeature>
      </li>
    ))}
  </ul>
));
