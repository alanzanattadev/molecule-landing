"use babel";
// @flow

import React from 'react';
import Feed from 'rss-to-json';

export default function MediumConnecterFactory() {
  return function MediumConnecter(Comp) {
    return class MediumContainer extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          articles: []
        };
      }

      componentDidMount() {
        if (this.props.name == null)
          throw new Error("You must set a user name to fetch Medium articles");
        Feed.load(`https://medium.com/feed/@${this.props.name}`, (err, rss) => {
          this.setState({articles: rss.items});
        });
      }

      render() {
        return (
          <Comp {...this.props} articles={this.state.articles}/>
        );
      }
    }
  }
}
