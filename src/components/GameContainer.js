/*
 * GameContainer
 *
 * GameContainer is responsible for:
 * - keeping track of game status,
 * - moving a user on to the next trial, and
 * - data reporting.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import curious from 'PickOne/src/CuriousLearningDataAPI';
import gameUtil from 'PickOne/src/gameUtil';
import PickOneContainer from './PickOneContainer';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAnswered: 0,
      questionsCorrect: 0,
      selected: undefined,
      selectedCorrect: undefined
    };
  }

  componentWillMount() {
    const trial = gameUtil.getTrial(this.props.trials[0]);
    const objectIDs = gameUtil.getObjectIDs(trial.obj_array);
    const dimensions = gameUtil.calcDimensions(trial.obj_array);

    this.setState({
      arraySize: parseInt(trial.array_size),
      objArray: trial.obj_array,
      objectIDs: objectIDs,
      dimensions: dimensions,
      guidanceID: trial.guidance_id,
      targetID: trial.target_id,
      trialStartTime: new Date()
    });
  }

  _onPressTarget(objID, target) {
    if (this.props.onPress) {
      this.props.onPress(objID, target);
    }

    let elapsedSeconds = (new Date() - this.state.trialStartTime) / 1000;
    let qAnswered = this.state.questionsAnswered;
    let qCorrect = this.state.questionsCorrect;

    this.setState({
      selected: objID,
      selectedCorrect: objID == target,
      questionsAnswered: qAnswered + 1
    });

    if (objID == target) {
      this.setState({questionsCorrect: qCorrect + 1});
    }

    let trial = gameUtil.getTrial(this.props.trials[this.state.questionsAnswered]);
    let foilList = [];

    this.state.objectIDs.forEach(
      function(obj) {
        if (obj != target) {
          foilList.push(obj);
        }
      }
    );

    curious.reportResponse(
      this.props.appID,
      this.props.appID,
      trial.level_id,
      trial.trial_id,
      new Date(),
      objID,
      foilList,
      elapsedSeconds,
      objID == target
    );

    setTimeout(function(){
      let trial = gameUtil.getTrial(this.props.trials[this.state.questionsAnswered]);
      let objectIDs = gameUtil.getObjectIDs(trial.obj_array);
      let dimensions = gameUtil.calcDimensions(trial.obj_array);

      this.setState({
        arraySize: parseInt(trial.array_size),
        objArray: trial.obj_array,
        objectIDs: objectIDs,
        dimensions: dimensions,
        guidanceID: trial.guidance_id,
        targetID: trial.target_id,
        trialStartTime: new Date(),
        selected: undefined,
        selectedCorrect: undefined
      });
    }.bind(this), 2000);
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <PickOneContainer
          arraySize={this.state.arraySize}
          dimensions={this.state.dimensions}
          guidanceID={this.state.guidanceID}
          objArray={this.state.objArray}
          objectIDs={this.state.objectIDs}
          onPress={(objId, target) => this._onPressTarget(objId, target)}
          selected={this.state.selected}
          selectedCorrect={this.state.selectedCorrect}
          targetID={this.state.targetID} />
      </View>
    );
  }
}

GameContainer.propTypes = {
  appID: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  trials: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default GameContainer;
