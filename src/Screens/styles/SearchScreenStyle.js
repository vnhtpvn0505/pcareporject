import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lblTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  txtLocation: {
    width: '60%',
  },

  btnGo: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 20,
    width: '35%',
    height: 35,
    backgroundColor: '#FCA691',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtGo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
