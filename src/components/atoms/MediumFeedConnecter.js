"use babel";
// @flow

import React from "react";
import axios from "axios";
import rssParser from "rss-parser";

export default function MediumConnecterFactory() {
  return function MediumConnecter(Comp) {
    return class MediumContainer extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          articles: [],
        };
      }

      componentDidMount() {
        if (this.props.name == null)
          throw new Error("You must set a user name to fetch Medium articles");
        axios
          .get(
            `https://cors.now.sh/https://medium.com/feed/@${this.props.name}`,
          )
          .then(response => {
            return new Promise((resolve, reject) =>
              rssParser.parseString(response.data, (err, parsed) => {
                if (err) reject(err);
                else resolve(parsed);
              }));
          })
          .then(data => {
            console.log(data);
            this.setState({
              articles: data.feed.entries.filter(entry =>
                entry.categories.includes("ide")),
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render() {
        return <Comp {...this.props} articles={this.state.articles} />;
      }
    };
  };
}
