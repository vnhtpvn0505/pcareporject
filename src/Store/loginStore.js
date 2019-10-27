import axios from 'react-native-axios';
import AsyncStorage from '@react-native-community/async-storage';
import {action, observable} from 'mobx';
import {Alert} from 'react-native';
var result = new Object();
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://5dafb4b7f2946f001481d935.mockapi.io/api/v1';

class LoginStore {
  async saveItem(item, value) {
    try {
      console.log('value', value);

      await AsyncStorage.setItem(item, value).then(response => {});
    } catch (error) {
      console.log('ERRR', error);
    }
  }

  login = async (username, password) => {
    console.log('deon');
    await axios
      .post('/users', {
        username: username,
        password: password,
      })
      .then(response => {
        for (var i in response) {
          if (typeof response[i] !== 'function') {
            result[i] = response[i];
          }
        }
        console.log('Res', response, result.data.access_token);
        this.saveItem('token', result.data.access_token);
      })
      .catch(error => {
        for (var i in error.response) {
          if (typeof error.response[i] !== 'function') {
            result[i] = error.response[i];
          }
        }
      });

    console.log('123', result.data);

    return result.data.access_token;
  };
}
const login = new LoginStore();
export default login;
