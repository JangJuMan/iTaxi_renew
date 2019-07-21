import React, { Component } from 'react';
import MainPage from './src/index';
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
