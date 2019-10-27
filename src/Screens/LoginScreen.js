import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/LoginScreenStyle';
import {Actions} from 'react-native-router-flux';

import {observable, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';

@observer
@inject('LoginStore')
export default class Login extends Component {
  @observable username = '';
  @observable password = '';

  constructor(props) {
    super(props);
  }

  _login = async () => {
    let token = await this.props.LoginStore.login(this.username, this.password);
    if (this.username !== '' && this.password !== '') {
      console.log('not null');
      Actions.search();
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
            onChangeText={username => (this.username = username)}
          />
          <TextInput
            placeholder={'Password'}
            style={styles.txtLogin}
            onChangeText={password => (this.password = password)}
          />
          <TouchableOpacity style={styles.lblForgot}>
            <Text>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => this._login()}>
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
