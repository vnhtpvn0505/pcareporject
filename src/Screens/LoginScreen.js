import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/LoginScreenStyle';
export default class Login extends Component {
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
          <TouchableOpacity style={styles.btnLogin}>
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
