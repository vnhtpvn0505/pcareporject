import React, {Component} from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles/listPetsStyle';
export default class ListDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          name: 'Huynh Tan Phuc',
          point: 4.5,
        },
        {
          id: 2,
          name: 'Huynh Tan Phuc',
          point: 4.5,
        },
        {
          id: 3,
          name: 'Huynh Tan Phuc',
          point: 4.5,
        },
      ],
    };
  }
  _renderItems = items => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>{items.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        renderItem={this._renderItems}
        data={(this, this.state.pets)}
        keyExtractor={item => item.id}
      />
    );
  }
}
