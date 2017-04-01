"use babel";
// @flow

import React from "react";
import Radium from "radium";

export default Radium(({}) => (
  <div
    style={{
      display: "flex",
      margin: "20px 10px"
    }}
  >
    <a
      href="https://twitter.com/moleculeide"
      className="twitter-follow-button"
      data-show-count="false"
      data-size="large"
    >
      Follow @moleculeide
    </a>
  </div>
));
