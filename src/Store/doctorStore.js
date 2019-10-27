import axios from 'react-native-axios';
import AsyncStorage from '@react-native-community/async-storage';
import {action, observable} from 'mobx';
import {Alert} from 'react-native';
var result = new Object();
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://5dafb4b7f2946f001481d935.mockapi.io/api/v1';

class DoctorStore {
  getAllDoctor = async () => {
    console.log('finihs');
    await axios
      .get('/doctor')
      .then(response => {
        for (var i in response) {
          if (typeof response[i] !== 'function') {
            result[i] = response[i];
          }
        }
      })
      .catch(error => {
        for (var i in error.response) {
          if (typeof error.response[i] !== 'function') {
            result[i] = error.response[i];
          }
        }
      });
    return result.data;
  };
}
const doctor = new DoctorStore();
export default doctor;
