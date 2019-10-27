import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListPets from '../Components/listPetsComponent';
import ListDoctor from '../Components/listDoctorComponent';

import {observable, toJS} from 'mobx';
import {observer, inject} from 'mobx-react';

@observer
@inject('DoctorStore')
export default class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.DoctorStore.getAllDoctor(),
    };
  }
  render() {
    return (
      <View>
        <ListPets />
        <ListDoctor data={this.state.data} />
      </View>
    );
  }
}
