'use babel';
// @flow
import React from 'react';
import {withState} from 'recompose';

export default Comp => withState(
  'element', 'handleRef', null
)(Comp);
