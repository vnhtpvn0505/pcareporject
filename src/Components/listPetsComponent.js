import React, {Component} from 'react';
import {
  Text,
  View,
  ViewPropTypes,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles/listPetsStyle';

export default class ListPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          name: 'dog',
        },
        {
          id: 2,
          name: 'cat',
        },
        {
          id: 3,
          name: 'hamster',
        },
        {
          id: 4,
          name: 'pig',
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
        horizontal
        renderItem={this._renderItems}
        data={(this, this.state.pets)}
        keyExtractor={item => item.id}
      />
    );
  }
}
