import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);
    return (
      <View>
        <Text>Demo</Text>
      </View>
    );
  }
}
