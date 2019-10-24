import React from 'react';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,

    height: 150,
  },
  viewBackgroundAvatar: {
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  imgAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    transform: [{translateY: -70}],
  },
  viewContentAvatar: {
    flexDirection: 'row',
    height: 20,
  },
  viewIconLeft: {
    alignItems: 'flex-end',
    flex: 0.4,
    marginTop: 10,
  },
  viewAvatar: {
    flex: 0.3,
    alignItems: 'center',
  },
  viewName: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  viewIconRight: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 0.4,
    marginTop: 10,
  },
  txtStar: {
    marginVertical: 3,
  },
});
