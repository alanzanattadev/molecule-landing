import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import { StyleRoot } from 'radium';
import './index.css';

ReactDOM.render(
  <StyleRoot>
    <Router />
  </StyleRoot>,
  document.getElementById('root')
);
