import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleRoot } from 'radium';
import './index.css';

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot>,
  document.getElementById('root')
);
