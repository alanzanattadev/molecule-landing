'use babel'
// @flow

import React from 'react';
import Radium from 'radium';
import Header, {HeaderDeltaPart} from '../atoms/Header';
import {StretchLayout, AbsoluteLayout, CenterLayout, EndLayout} from '../nucleons/layouts';
import MoleculeScreenshot from '../atoms/MoleculeScreenshot';
import {boxShadowActive} from '../nucleons/design';
import HeaderTitle from '../atoms/HeaderTitle';
import Logo from '../atoms/Logo';

export default Radium(({}: {}) => (
  <StretchLayout>
    <Header>
      <HeaderTitle>Create faster with Molecule</HeaderTitle>
      <CenterLayout stretched>
        <MoleculeScreenshot style={{maxWidth: '90vw', maxHeight: '70vh', zIndex: '7', height: 'auto', width: 'auto', boxShadow: boxShadowActive}}/>
      </CenterLayout>
    </Header>
    <HeaderDeltaPart>
      <StretchLayout>

      </StretchLayout>
    </HeaderDeltaPart>
  </StretchLayout>
));
