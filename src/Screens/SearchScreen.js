import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles/SearchScreenStyle';
import {Actions} from 'react-native-router-flux';

import {observable, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';

export default class SearchScreen extends Component {
  @observable title = '123';
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lblTitle}>Find pet Carer in</Text>
        <TextInput underlineColorAndroid="grey" style={styles.txtLocation} />
        <TouchableOpacity
          style={styles.btnGo}
          onPress={() => Actions.discover((title = this.title))}>
          <Text style={styles.txtGo}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
