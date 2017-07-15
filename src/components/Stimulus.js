/**/

import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import gameUtil from 'PickOne/src/gameUtil';

const Sound = require('react-native-sound');
const stimulusDimension = 150;

class Stimulus extends React.Component {
  constructor(props) {
    super(props);

    this.stimulusDetails;
    this.audio;
  }

  componentDidMount() {

  }

  componentWillUnMount() {
    if (this.stimulusDetails.type == 'audio') {
      this.audio.release();
    }
  }

  _onPressAudio() {
    this.audio.stop().play();
  }

  _onPressStimulus(e) {
    e.preventDefault();
    if (this.props.onPress) {
      this.props.onPress(this.props.objId);
    }
  }

  render() {
    if (this.props.selected == this.props.stimulus && this.props.target == true) {
      return(<Image source={require('PickOne/src/images/dog_celebrate01.png')} style={{width: stimulusDimension, height: stimulusDimension}}/>);
    } else if (this.props.selected == this.props.stimulus && this.props.target == false) {
      return(<Image source={require('PickOne/src/images/dog_annoyed02.png')} style={{width: stimulusDimension, height: stimulusDimension}}/>);
    }

    this.stimulusDetails = gameUtil.getStimulus(this.props.stimulus);
    if (this.stimulusDetails.type == 'audio') {
      this.audio = new Sound(this.stimulusDetails.stimulus, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound ', error);
        }

        console.log('duration in seconds: ' + this.audio.getDuration() + 'number of channels: ' + this.audio.getNumberOfChannels());
      });

      setTimeout(function() {
        this.audio.play();
      }.bind(this), 500);

      return(
        <TouchableHighlight onPress={(e) => this._onPressAudio(e)}>
          <Image source={require('PickOne/src/images/audioOn.png')} style={{borderColor: 'black', borderRadius: 3, borderWidth: 3, width: 100, height: 100}}/>
        </TouchableHighlight>
      );
    } else if (this.stimulusDetails.type == 'image') {
      return(
        <Image source={gameUtil.images[this.stimulusDetails.object_id]} style={{width: stimulusDimension, height: stimulusDimension}}/>
      );
    } else {
      return(
        <TouchableHighlight onPress={(e) => this._onPressStimulus(e)} style={{borderColor: 'black', borderRadius: 3, borderWidth: 3, width: stimulusDimension, height: stimulusDimension}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 50}}>
              { this.props.stimulus }
            </Text>
          </View>
        </TouchableHighlight>
      );
    }
  }
}

Stimulus.propTypes = {
  objId: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.string,
  stimulus: PropTypes.string,
  target: PropTypes.bool
};

export default Stimulus;
