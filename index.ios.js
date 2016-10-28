/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello Wolrd!</Text>
      );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
