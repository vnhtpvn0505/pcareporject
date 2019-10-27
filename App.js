import React, {Component} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Provider} from 'mobx-react';
import Routers from './src/Routers/routers';

import LoginStore from './src/Store/loginStore';
import DoctorStore from './src/Store/doctorStore';
const store = {
  LoginStore,
  DoctorStore,
};

export default class App extends Component<{}> {
  render() {
    return (
      <Provider {...store}>
        <Routers />
      </Provider>
    );
  }
}
