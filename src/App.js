"use babel";
// @flow
import React, { Component } from "react";
import Smooch from "smooch";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./LandingPage";
import Documentation from "./components/organisms/Documentation";
import OnContrustion from "./components/atoms/OnConstruction";

class App extends Component {
  componentDidMount() {
    Smooch.init({ appToken: "48dllw59ia1vrotft27sb231o" });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/documentation" component={OnContrustion}/>
          <Route path="/blog" component={OnContrustion}/>
          <Route path="/contactus" component={OnContrustion}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
