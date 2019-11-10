import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import MainPage from './src/index';

import * as Font from 'expo-font';
import { /*titleFont,*/ numFont } from './variable/assets';

import TaxiStore from './stores/taxi';
import UserStore from './stores/user';
import CarpoolStore from './stores/carpool';
import NowDate from './stores/nowDate';

import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light } from '@eva-design/eva';

const taxiStore = new TaxiStore();
const userStore = new UserStore();
const carpoolStore = new CarpoolStore();
const dateStore = new NowDate();

export default class App extends Component {
  componentWillMount() {
    Font.loadAsync({
      // "titleFont": titleFont,
      "numFont": numFont,
    });
  }

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider 
          userStore = {userStore}
          taxiStore = {taxiStore}
          carpoolStore = {carpoolStore}  
          dateStore = {dateStore}
        >
          <MainPage />
        </Provider>
      </ApplicationProvider>
    )
  }
}