'use babel';
// @flow

import {withState, lifecycle} from 'recompose';
import _ from 'lodash';
import refHandler from './RefHandler';

export default (Comp: React$Component<* ,* ,*>) => refHandler(withState('visible', 'setVisible', false)(lifecycle({
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
    if (this.props.element && this.props.element.node) {
      let elemRect = this.props.element.node.getBoundingClientRect();
      if (document.body === null) return false;
      let bodyRect = document.body.getBoundingClientRect();
      let offset = elemRect.top - bodyRect.top;
      let scrollY = window.scrollY;
      return scrollY > offset - 200;
    } else {
      return false;
    }
  }
})(Comp)));
