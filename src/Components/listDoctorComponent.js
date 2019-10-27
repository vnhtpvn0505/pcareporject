import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles/listDoctorStyle';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
export default class ListDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _getData = async () => {
    console.log('dddsstoe', await this.props.data);
    this.setState({
      data: await this.props.data,
    });
  };
  async UNSAFE_componentWillMount() {
    await this._getData();
  }
  _onPress(item) {
    Actions.profile({item: item});
  }

  _renderItems = (items, index) => {
    console.log('Items', items);

    return (
      <View style={styles.container} key={items.index}>
        <TouchableOpacity
          style={styles.btnListDoctor}
          onPress={() => {
            this._onPress(items);
          }}>
          <Image source={require('../images/1.jpg')} style={styles.imgAvatar} />
          <View style={styles.lblInfo}>
            <Text>{items.item.name}</Text>
            <View style={styles.lblPoint}>
              <Icons name={'star'} />
              <Text>{items.item.point}</Text>
            </View>
          </View>
          <View style={styles.lblPrices}>
            <Text>{items.item.money}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        renderItem={this._renderItems}
        data={(this, this.state.data)}
        keyExtractor={item => item.id}
      />
    );
  }
}
