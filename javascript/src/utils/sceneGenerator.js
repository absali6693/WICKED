import * as React from 'react';
import { Scene } from 'react-native-router-flux';

const backChevron = require('../../assets/images/back_chevron.png');

// tslint:disable:align
const defaultParams = {
  backButtonImage: backChevron,
  backButtonTextStyle: {
    color: 'black',
  },
  backTitle: 'Back',
  hideNavBar: true,
};
// tslint:enable:align

export default function sceneGenerator(params) {
  return (<Scene {...Object.assign({}, defaultParams, params)} />);
}
