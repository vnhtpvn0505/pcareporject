import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles/WelcomeScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtWelcome}>Welcome to PCare</Text>
        <Icon name={'paw'} size={100} />
        <TouchableOpacity style={styles.btnWelcome}>
          <Text style={styles.txtButton}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnWelcome}
          onPress={() => Actions.login()}>
          <Text style={styles.txtButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
