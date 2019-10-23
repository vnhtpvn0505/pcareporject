import React, {Component} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Provider} from 'mobx-react';
import Routers from './src/Routers/routers';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider>
        <Routers />
      </Provider>
    );
  }
}
