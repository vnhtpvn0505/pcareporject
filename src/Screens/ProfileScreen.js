import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/ProfileScreenStyle';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBackgroundAvatar} />
        <View style={styles.viewContentAvatar}>
          <View style={styles.viewIconLeft}>
            <Icons name={'bookmark'} size={20} />
          </View>
          <View style={styles.viewAvatar}>
            <Image
              source={require('../images/1.jpg')}
              style={styles.imgAvatar}
            />
          </View>
          <View style={styles.viewIconRight}>
            <Icons name={'star'} size={20} />
            <Text style={styles.txtStar}>4.7</Text>
          </View>
        </View>
        <View style={styles.viewName}>
          <Text style={styles.txtName}>Huynh Tan Phuc</Text>
          <Text style={styles.txtName}>26, Ho Chi Minh</Text>
        </View>
      </View>
    );
  }
}
