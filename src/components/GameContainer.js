/**/

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import CuriousLearningDataAPI from 'PickOne/src/CuriousLearningDataAPI';
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
    const objectIds = gameUtil.getObjectIds(trial.obj_array);
    const dimensions = gameUtil.calcDimensions(trial.obj_array);

    this.setState({
      arraySize: parseInt(trial.array_size),
      objArray: trial.obj_array,
      objectIds: objectIds,
      dimensions: dimensions,
      guidanceId: trial.guidance_id,
      targetId: trial.target_id,
      trialStartTime: new Date()
    });
  }

  _onPressTarget(objId, target) {
    if (this.props.onPress) {
      this.props.onPress(objId, target);
    }

    let elapsedSeconds = (new Date() - this.state.trialStartTime) / 1000;
    let qAnswered = this.state.questionsAnswered;
    let qCorrect = this.state.questionsCorrect;

    this.setState({
      selected: objId,
      selectedCorrect: objId == target,
      questionsAnswered: qAnswered + 1
    });

    if (objId == target) {
      this.setState({questionsCorrect: qCorrect + 1});
    }

    let trial = gameUtil.getTrial(this.props.trials[this.state.questionsAnswered]);
    let foilList = [];

    this.state.objectIds.forEach(
      function(obj) {
        if (obj != target) {
          foilList.push(obj);
        }
      }
    );

    CuriousLearningDataAPI.reportResponse(
      this.props.appID,
      this.props.appID,
      trial.level_id,
      trial.trial_id,
      new Date(),
      objId,
      foilList,
      elapsedSeconds,
      objId == target
    );

    setTimeout(function(){
      let trial = gameUtil.getTrial(this.props.trials[this.state.questionsAnswered]);
      let objectIds = gameUtil.getObjectIds(trial.obj_array);
      let dimensions = gameUtil.calcDimensions(trial.obj_array);

      this.setState({
        arraySize: parseInt(trial.array_size),
        objArray: trial.obj_array,
        objectIds: objectIds,
        dimensions: dimensions,
        guidanceId: trial.guidance_id,
        targetId: trial.target_id,
        trialStartTime: new Date(),
        selected: undefined,
        selectedCorrect: undefined
      });
    }.bind(this), 2000);
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <PickOneContainer arraySize={this.state.arraySize} objArray={this.state.objArray} objectIds={this.state.objectIds} dimensions={this.state.dimensions} guidanceId={this.state.guidanceId} targetId={this.state.targetId} selected={this.state.selected} selectedCorrect={this.state.selectedCorrect} onPress={(objId, target) => this._onPressTarget(objId, target)}>
        </PickOneContainer>
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
