import React, { Component } from 'react';
import MainPage from './src/index';
// import MainPage from './src/pages/chatRoom';
import { Provider } from 'mobx-react';
import UserStore from './stores/user';

const userStore = new UserStore();

export default class App extends Component {
  render() {
    return (
      <Provider userStore = {userStore}>
        <MainPage />
      </Provider>
    )
  }
}