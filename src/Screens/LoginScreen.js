import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/LoginScreenStyle';
import {Actions} from 'react-native-router-flux';

import {observable, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  _login = () => {
    console.log(this.state.username);

    if (this.state.username === '' && this.state.password === '') {
      console.log('test');
      Actions.search();
    } else {
      console.log('demo');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lblTitle}>LOGIN</Text>
        <View style={styles.viewLogin}>
          <TextInput
            style={styles.txtLogin}
            placeholder={'Username'}
            onChangeText={username => (this.state.username = username)}
          />
          <TextInput
            placeholder={'Password'}
            style={styles.txtLogin}
            onChangeText={password => (this.state.password = password)}
          />
          <TouchableOpacity style={styles.lblForgot}>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.btnLogin} onPress={this._login}>
            <Text style={styles.lblButtonLogin}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.lblButtonLogin}>LOGIN WITH FACEBOOK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
