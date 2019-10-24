import axios from 'react-native-axios';
import {action, observable} from 'mobx';
import {Alert} from 'react-native';
var result = new Object();
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://5dafb4b7f2946f001481d935.mockapi.io/api/v1/';

class Data {
  _loginAPI = async (username, password) => {
    url = 'users';
    await axios(url, {
      method: 'POST',
      params: {
        username: username,
        password: password,
      },
    })
      .then(response => {
        for (var i in response) {
          if (typeof response[i] !== 'function') {
            result[i] = response[i];
          }
        }
        this.saveItem('id_token', result.data.access_token);
      })
      .catch(function(error) {
        for (var i in error.response) {
          if (typeof error.response[i] !== 'function') {
            result[i] = error.response[i];
          }
        }
      });
    return result.data;
  };
}
