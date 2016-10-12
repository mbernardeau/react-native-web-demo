/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/components/App';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';

const store = configureStore();


export default class RNWDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RNWDemo', () => RNWDemo);
AppRegistry.runApplication('RNWDemo', {
  rootTag: document.getElementById('react-root'),
});
