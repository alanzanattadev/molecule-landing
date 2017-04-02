"use babel";
// @flow

import React from "react";
import Radium from "radium";
import MediumArticle from "../organisms/MediumArticle";
import MediumFeedConnecter from "../atoms/MediumFeedConnecter";

export default MediumFeedConnecter()(
  Radium(({ articles }: {}) => (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {articles.map(article => (
        <li key={article}>
          <MediumArticle />
        </li>
      ))}
    </ul>
  )),
);
