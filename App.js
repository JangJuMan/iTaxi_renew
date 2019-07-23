import React, { Component } from 'react';
import MainPage from './stores/get';
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
