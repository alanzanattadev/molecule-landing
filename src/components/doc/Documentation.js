"use babel";
// @flow
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import './Documentation.css'

class Documentation extends Component {
    render(){
      return (
        <div>
          <div className="leftMenu">
            <ul>
              <li><Link to="/document">Element1</Link></li>
              <li><Link to="/document/elem2">Element2</Link></li>
            </ul>
          </div>
          <div className="docContent">
            <Switch>
            <Route exact path="/document" component={Elem1}/>
            <Route exact path="/document/elem2" component={Elem2}/>
            </Switch>
          </div>
        </div>
      )
    }



}
const Elem1 = () => <h3>Element 1</h3>
const Elem2 = () => <h3>Element 2</h3>
export default Documentation
