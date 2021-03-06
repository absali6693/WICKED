import React from 'react';
import { Scene } from 'react-native-router-flux';

import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';

export default (
  <Scene key={'SignUp_tree'} direction={'vertical'} title={'SignUp'}>
    {ProfileScreen}
    {SignUpScreen}
  </Scene>
);
