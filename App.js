import React, { Component } from 'react';
import MainPage from './src/index';
// import MainPage from './src/pages/chatRoom';
import { Provider } from 'mobx-react';
import TaxiStore from './stores/taxi';

const taxiStore = new TaxiStore();

export default class App extends Component {
  render() {
    return (
      <Provider taxiStore = {taxiStore}>
        <MainPage />
      </Provider>
    )
  }
}