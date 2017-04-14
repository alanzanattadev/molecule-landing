"use babel";
// @flow

import React from "react";
import Radium from "radium";
import ChangelogConnecter from "../atoms/ChangelogConnecter";
import Markdown from "react-markdown";

export default ChangelogConnecter({})(
  ({ changelogs = [] }) =>
    changelogs != null &&
    <ul style={{
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '400px',
    }}>
      {changelogs.map((changelog, i) => (
        <Markdown source={changelog} key={i} />
      ))}
    </ul>,
);
