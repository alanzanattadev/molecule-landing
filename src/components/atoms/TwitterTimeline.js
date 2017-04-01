"use babel";
// @flow

import React from "react";
import Radium from "radium";

export default Radium(({}) => (
  <div
    style={{
      display: 'flex',
      flex: '1',
      maxWidth: '1200px',
    }}
  >
    <a className="twitter-timeline" data-theme="light" href="https://twitter.com/moleculeide">
      Tweets by moleculeide
    </a>
  </div>
));
