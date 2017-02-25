import React from 'react';
import { Scene } from 'react-native-router-flux';

import SignUpScreen from './screens/SignUpScreen';
import KeyboardViewScreen from './screens/KeyboardViewTest';

export default (
  <Scene key={'SignUp_tree'} direction={'vertical'} title={'SignUp'}>
    {KeyboardViewScreen}
    {SignUpScreen}
  </Scene>
);
