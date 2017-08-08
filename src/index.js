import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleRoot } from 'radium';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <StyleRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyleRoot>,
  document.getElementById('root')
);
