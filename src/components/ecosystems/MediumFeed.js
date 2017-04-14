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
        flexDirection: 'column',
        alignItems: "center",
        padding: '0',
        margin: '0',
      }}
    >
      {articles.map(article => (
        <MediumArticle
          key={article.guid}
          title={article.title}
          link={article.guid}
          // description={article["content:encoded"].substring(0, 100)}
        />
      ))}
    </ul>
  )),
);
