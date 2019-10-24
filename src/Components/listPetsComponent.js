import React, {Component} from 'react';
import {
  Text,
  View,
  ViewPropTypes,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/listPetsStyle';
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
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
  // _renderItems = items => {
  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity>
  //         <Text>{items.item.name}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
        {this.state.pets.map((item, index) => {
          return (
            <View
              tabLabel={item}
              key={index}
              style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{item}</Text>
              <Text>{'DefaultTabBar'}</Text>
            </View>
          );
        })}
      </ScrollableTabView>
      // <FlatList
      //   horizontal
      //   renderItem={this._renderItems}
      //   data={(this, this.state.pets)}
      //   keyExtractor={item => item.id}
      // />
    );
  }
}
