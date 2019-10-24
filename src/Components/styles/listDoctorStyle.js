import React from 'react';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  btnListDoctor: {
    flexDirection: 'row',
    width: '100%',
  },
  imgAvatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  lblInfo: {
    flex: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  lblPoint: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblPrices: {
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
});
