import React, {Component} from 'react';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SearchScreen from '../Screens/SearchScreen';
import DisCoverScreen from '../Screens/DiscoverScreen';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} />
          <Scene key="login" component={LoginScreen} hideNavBar={true} />
          <Tabs>
            <Scene
              key="discover"
              component={DisCoverScreen}
              title="Discover"
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="web" size={20} />;
              }}
            />
            <Scene
              key="search"
              component={SearchScreen}
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="restore" size={20} />;
              }}
            />
            <Scene
              key="notification"
              component={SearchScreen}
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="bell" size={20} />;
              }}
            />
            <Scene
              key="email"
              component={SearchScreen}
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="email" size={20} />;
              }}
            />
            <Scene
              key="account"
              component={SearchScreen}
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="account" size={20} />;
              }}
            />
          </Tabs>
        </Stack>
      </Router>
    );
  }
}
