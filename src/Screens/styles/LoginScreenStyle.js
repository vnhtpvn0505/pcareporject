import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  lblTitle: {
    fontSize: 40,
    paddingVertical: 10,
  },
  viewLogin: {
    width: '90%',
  },
  txtLogin: {
    marginVertical: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
  },
  lblForgot: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  viewButton: {
    width: '60%',
  },
  btnLogin: {
    marginVertical: 5,
    backgroundColor: '#FCA691',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
  },
  lblButtonLogin: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
