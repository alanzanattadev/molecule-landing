'use babel'
// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {withState, lifecycle} from 'recompose';
import _ from 'lodash';
import refHandler from './RefHandler';

export default Comp => refHandler
(withState(
  'visible', 'setVisible', false
)(lifecycle({
  componentDidMount() {
    this.handleScrollThrottled = _.throttle(() => this.handleScroll(), 10);
    document.addEventListener('scroll', this.handleScrollThrottled);
    this.handleScrollThrottled();
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollThrottled);
  },

  handleScroll() {
    if (this.isVisible()) {
      this.props.setVisible(true);
    }
  },

  isVisible() {
    if (this.props.element) {
      let elemRect = ReactDOM.findDOMNode(this.props.element).getBoundingClientRect();
      let bodyRect = document.body.getBoundingClientRect();
      let offset = elemRect.top - bodyRect.top;
      let scrollY = window.scrollY;
      if (scrollY > offset - 200)
        return true;
      else
        return false;
    } else {
      return false;
    }
  }
})(Comp)));
