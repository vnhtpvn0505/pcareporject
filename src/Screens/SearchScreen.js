import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/SearchScreenStyle';
import {Actions} from 'react-native-router-flux';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lblTitle}>Find pet Carer in</Text>
        <TextInput underlineColorAndroid="grey" style={styles.txtLocation} />
        <TouchableOpacity
          style={styles.btnGo}
          onPress={() => Actions.discover()}>
          <Text style={styles.txtGo}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
