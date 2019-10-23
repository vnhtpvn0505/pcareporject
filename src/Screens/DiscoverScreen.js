import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListPets from '../Components/listPetsComponent';
import ListDoctor from '../Components/listDoctorComponent';

export default class DiscoverScreen extends Component {
  render() {
    return (
      <View>
        <ListPets />
        <ListDoctor />
      </View>
    );
  }
}
