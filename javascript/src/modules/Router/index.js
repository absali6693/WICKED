import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SignUp from '../SignUp/SignUpScene';

const Routes = () => (
  <Router>
    <Scene key={'app_root'}>
      {SignUp}
    </Scene>
  </Router>
);

export default Routes;
