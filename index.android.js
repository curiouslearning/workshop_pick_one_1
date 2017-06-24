/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import GameContainer from './src/components/GameContainer';

export default class PickOne extends Component {
  render() {
    return (
      <GameContainer>
      </GameContainer>
    );
  }
}

AppRegistry.registerComponent('PickOne', () => PickOne);
