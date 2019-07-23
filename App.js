import React, { Component } from 'react';
import MainPage from './src/index';
// import MainPage from './src/pages/chatRoom';
import { Provider } from 'mobx-react';


export default class App extends Component {
  render() {
    return (
      <Provider>
        <MainPage />
      </Provider>
    )
  }
}