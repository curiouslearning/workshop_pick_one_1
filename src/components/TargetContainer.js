/*
 * TargetContainer
 *
 * TargetContainer is responsible for:
 * - displaying the target and foils, and
 * - playing positive/negative audio feedback.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import TargetStimulus from './TargetStimulus';

const Sound = require('react-native-sound');
const correctSound = new Sound('pickup2.ogg', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound ', error);
  }

  console.log('duration in seconds: ' + correctSound.getDuration() + 'number of channels: ' + correctSound.getNumberOfChannels());
});
const incorrectSound = new Sound('rumble3.ogg', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound ', error);
  }

  console.log('duration in seconds: ' + incorrectSound.getDuration() + 'number of channels: ' + incorrectSound.getNumberOfChannels());
});

class TargetContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnMount() {
    correctSound.release();
    incorrectSound.release();
  }

  _onPressTarget(objID, target) {
    if (this.props.onPress) {
      this.props.onPress(objID, target);
    }

    if (objID == this.props.targetID) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }
  }

  render() {
    const target = this.props.targetID;

    let rows = Array.apply(
      null,
      {length: this.props.dimensions[0] + 1}
    ).map(Number.call, Number);

    let columns = Array.apply(
      null,
      {length: this.props.dimensions[1] + 1}
    ).map(Number.call, Number);

    // arrange stimuli according to pos corrdinates specified in JSON file.
    var stimuli = rows.map(function(row) {
      let stimuliRow = columns.map(function(col) {
        let stimulus = undefined;

        this.props.objArray.forEach(function(obj, index) {
          if (parseInt(obj.pos[0]) == row && parseInt(obj.pos[1]) == col) {
            stimulus = <TargetStimulus
              key={index}
              onPress={() => this._onPressTarget(obj.obj_id, target)}
              selected={this.props.selected}
              stimulus={obj.obj_id}
              target={obj.obj_id == target} />;
          }
        }, this);

        return stimulus;
      }, this);

      return (
        <View
          key={row}
          style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          {stimuliRow}
        </View>
      );
    }, this);

    return(
      <View style={{
        alignContent: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        {stimuli}
      </View>
    );
  }
}

TargetContainer.propTypes = {
  dimensions: PropTypes.arrayOf(PropTypes.number.isRequired),
  objArray: PropTypes.arrayOf(PropTypes.object.isRequired),
  onPress: PropTypes.func,
  selected: PropTypes.string,
  targetID: PropTypes.string.isRequired
};

export default TargetContainer;
