import React from 'react';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtWelcome: {
    fontSize: 25,
    fontWeight: '700',
  },
  btnWelcome: {
    shadowOffset: {
      height: 1,
    },
    marginVertical: 5,
    backgroundColor: '#FCA691',
    alignItems: 'center',
    paddingVertical: 15,
    width: '60%',
    borderRadius: 30,
  },
  txtButton: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});
