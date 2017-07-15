/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import GameContainer from './src/components/GameContainer';

const appID = 'PickOne';
const trials = ['001', '002', '003'];

export default class PickOne extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <GameContainer appID={appID} trials={trials}>
        </GameContainer>
      </View>
    );
  }
}

AppRegistry.registerComponent('PickOne', () => PickOne);
