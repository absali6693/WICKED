import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
} from 'react-native';
import { store } from './store';
import Router from './modules/Router';

export default class WICKED extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
