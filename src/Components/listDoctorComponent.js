import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles/listDoctorStyle';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
export default class ListDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          src: require('../images/1.jpg'),
          name: 'Huynh Tan Phuc',
          point: 4.5,
          price: '30$/h',
        },
        {
          id: 2,
          name: 'Huynh Tan Phuc',
          src: require('../images/1.jpg'),
          point: 4.5,
          price: '30$/h',
        },
        {
          id: 3,
          name: 'Huynh Tan Phuc',
          src: require('../images/1.jpg'),
          point: 4.5,
          price: '40$/h',
        },
        {
          id: 4,
          name: 'Huynh Tan Phuc',
          src: require('../images/1.jpg'),
          point: 4.5,
          price: '40$/h',
        },
        {
          id: 5,
          name: 'Huynh Tan Phuc',
          src: require('../images/1.jpg'),
          point: 4.5,
          price: '40$/h',
        },
      ],
    };
  }
  _renderItems = (items, index) => {
    return (
      <View style={styles.container} key={items.index}>
        <TouchableOpacity
          style={styles.btnListDoctor}
          onPress={() => {
            Actions.profile();
          }}>
          <Image source={items.item.src} style={styles.imgAvatar} />
          <View style={styles.lblInfo}>
            <Text>{items.item.name}</Text>
            <View style={styles.lblPoint}>
              <Icons name={'star'} />
              <Text>{items.item.point}</Text>
            </View>
          </View>
          <View style={styles.lblPrices}>
            <Text>{items.item.price}</Text>
          </View>
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
