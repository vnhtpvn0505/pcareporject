import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SearchScreen from '../Screens/SearchScreen';
import DisCoverScreen from '../Screens/DiscoverScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Header from '../Components/Header';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="welcome" component={WelcomeScreen} hideNavBar={true} />
          <Scene key="login" component={LoginScreen} hideNavBar={true} />

          <Tabs hideNavBar={true}>
            <Scene
              key="discover"
              titleStyle={styles.navigationBarTitleStyle}
              title="DISCOVER"
              component={DisCoverScreen}
              icon={() => {
                return <Icons color="black" name="web" size={20} />;
              }}
            />

            <Scene
              key="search"
              title="Search"
              component={SearchScreen}
              hideNavBar={true}
              icon={() => {
                return <Icons color="black" name="restore" size={20} />;
              }}
            />
            <Scene
              key="notification"
              component={SearchScreen}
              title="Notification"
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
              key="profile"
              title="PROFILE"
              component={ProfileScreen}
              titleStyle={styles.navigationBarTitleStyle}
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

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    // centering for Android
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
