import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} />
          <Scene key="login" component={LoginScreen} />
        </Stack>
      </Router>
    );
  }
}
