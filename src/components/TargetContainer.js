/**/

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

  _onPressTarget(objId, target) {
    if (this.props.onPress) {
      this.props.onPress(objId, target);
    }

    if (objId == this.props.targetId) {
      console.log('correct!');
      correctSound.play()
    } else {
      console.log('too bad!');
      incorrectSound.play()
    }
  }

  render() {
    const target = this.props.targetId

    var targets = this.props.objectIds.map(function (objId, index) {
      return <TargetStimulus key={index} stimulus={objId} type={'letter'} target={objId == target} onPress={() => this._onPressTarget(objId, target)} selected={this.props.selected}></TargetStimulus>;
    }, this);

    return(
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 50
        }}>
        {targets}
      </View>
    );
  }
}

export default TargetContainer;
