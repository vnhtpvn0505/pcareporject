import React, {Component} from 'react';
import {View, Image, Text, Dimension, TouchableOpacity} from 'react-native';
import styles from './styles/ProfileScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    console.log('PROS', this.props);
  }
  render() {
    console.log(this.props.item);
    return (
      <View style={styles.container}>
        <View style={styles.viewBackgroundAvatar} />
        <View style={styles.viewContentAvatar}>
          <View style={styles.viewIconLeft}>
            <Icon name={'bookmark'} size={20} />
          </View>
          <View style={styles.viewAvatar}>
            <Image
              source={require('../images/1.jpg')}
              style={styles.imgAvatar}
            />
          </View>
          <View style={styles.viewIconRight}>
            <Icon name={'star'} size={20} />
            <Text style={styles.txtStar}>4.7</Text>
          </View>
        </View>
        <View style={styles.viewName}>
          <Text style={styles.txtName}>Huynh Tan Phuc</Text>
          <Text style={styles.txtName}>26, Ho Chi Minh</Text>
        </View>
        <View style={styles.bgAbout}>
          <TouchableOpacity style={styles.tabProfile}>
            <Text style={styles.lblAbout}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabProfile}>
            <Text style={styles.lblAbout}>Review</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabProfile}>
            <Text style={styles.lblAbout}>Pricing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContentAbout}>
          <View style={styles.viewItemAbout}>
            <Icon name={'city'} size={20} />
            <Text style={styles.txtAbout}>Lives in Ho Chi Minh, Viet Nam</Text>
          </View>
          <View style={styles.viewItemAbout}>
            <Icon name={'paw'} size={20} />
            <Text style={styles.txtAbout}>Has tree dogs</Text>
          </View>
          <View style={styles.viewItemAbout}>
            <Icon name={'school'} size={20} />
            <Text style={styles.txtAbout}>Cretified per behavious</Text>
          </View>
          <View style={styles.bgButtonAbout}>
            <TouchableOpacity style={styles.btnAbout}>
              <Text style={styles.lblAbout}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAbout}>
              <Text style={styles.lblAbout}>BOOK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
