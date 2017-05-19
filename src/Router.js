import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Documentation from "./components/ecosystems/Documentation";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/document" component={Documentation} />
        <Route component={() => <div>not found</div>}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
