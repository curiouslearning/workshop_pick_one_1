/**
 * PickOne: React Native App (Android)
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import GameContainer from './src/components/GameContainer';
import gameUtil from './src/gameUtil';

const appID = 'PickOne';
const trials = gameUtil.getTrials();

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
