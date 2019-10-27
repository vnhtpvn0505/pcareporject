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
  bgAbout: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  lblAbout: {
    fontWeight: 'bold',
  },
  tabProfile: {
    width: '20%',
    paddingVertical: 5,
    alignItems: 'center',
  },
  viewContentAbout: {
    padding: 10,
  },
  viewItemAbout: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAbout: {
    marginLeft: 20,
  },
  btnAbout: {
    padding: 10,
    width: '40%',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#FCA691',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 30,
  },
  bgButtonAbout: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
});
