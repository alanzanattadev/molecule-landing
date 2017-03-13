'use babel';
// @flow

import {withState} from 'recompose';

export default (Comp: React$Component<* ,* ,*>) => withState(
    'element', 'handleRef', null
)(Comp);
