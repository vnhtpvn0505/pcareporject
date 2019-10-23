import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/LoginScreenStyle';
import {Actions} from 'react-native-router-flux';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '123456',
    };
  }

  _login = () => {
    if (this.state.username === 'admin' && this.state.password === '123456') {
      console.log('test');
      Actions.search();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lblTitle}>LOGIN</Text>
        <View style={styles.viewLogin}>
          <TextInput style={styles.txtLogin} placeholder={'Username'} />
          <TextInput placeholder={'Password'} style={styles.txtLogin} />
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
