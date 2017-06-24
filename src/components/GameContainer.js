/**/

import React from 'react';
import { View } from 'react-native';

import PickOneContainer from './PickOneContainer';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAnswered: 0,
      questionsCorrect: 0,
      arraySize: 4,
      objectIds: ['a', 'b', 'c', 'd'],
      targetId: 'a',
      selected: undefined,
      selectedCorrect: undefined
    };
  }

  _onPressTarget(objId, target) {
    console.log('game container!');
    if (this.props.onPress) {
      this.props.onPress(objId, target);
    }

    qAnswered = this.state.questionsAnswered
    qCorrect = this.state.questionsCorrect

    this.setState({selected: objId, selectedCorrect: objId == target, questionsAnswered: qAnswered + 1});

    if (objId == target) {
      this.setState({questionsCorrect: qCorrect + 1});
    }

    setTimeout(function(){
      this.setState({
        targetId: 'b',
        selected: undefined,
        selectedCorrect: undefined
      })
    }.bind(this), 2000);
  }

  render() {
    return(
      <PickOneContainer arraySize={this.state.arraySize} objectIds={this.state.objectIds} targetId={this.state.targetId} selected={this.state.selected} selectedCorrect={this.state.selectedCorrect} onPress={(objId, target) => this._onPressTarget(objId, target)}>
      </PickOneContainer>
    );
  }
}

export default GameContainer;
