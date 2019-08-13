import React, { Component } from 'react';
import MainPage from './src/index';
// import MainPage from './src/pages/chatRoom';
import { Provider } from 'mobx-react';
import TaxiStore from './stores/taxi';
import UserStore from './stores/user';
import CarpoolStore from './stores/carpool';
import {titleFont,numFont} from './src/variable/assets';
import * as Font from 'expo-font';

const taxiStore = new TaxiStore();
const userStore = new UserStore();
const carpoolStore = new CarpoolStore();

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'titleFont': titleFont,
      'numFont':numFont,
    });
  }
  render() {
    return (
      <Provider 
        userStore = {userStore}
        taxiStore = {taxiStore}
        carpoolStore = {carpoolStore}  
      >
        <MainPage />
      </Provider>
    )
  }
}