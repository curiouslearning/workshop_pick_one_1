/**/

import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const Sound = require('react-native-sound');
const amazing = new Sound('amazing.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound ', error);
  }

  console.log('duration in seconds: ' + amazing.getDuration() + 'number of channels: ' + amazing.getNumberOfChannels());
});

class Stimulus extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.type == 'audio') {
      setTimeout(function() {
        amazing.play();
      }, 1);
    }
  }

  componentWillUnMount() {
    if (this.props.type == 'audio') {
      amazing.release();
    }
  }

  _onPressAudio() {
    console.log('audio pressed!');
    amazing.stop().play();
  }

  _onPressStimulus(e) {
    e.preventDefault();
    if (this.props.onPress) {
      this.props.onPress(this.props.objId);
    }
  }

  render() {
    if (this.props.selected == this.props.stimulus && this.props.target == true) {
      return(<Image source={require('PickOne/src/images/dog_celebrate01.png')} style={{width: 200, height: 200}}/>);
    } else if (this.props.selected == this.props.stimulus && this.props.target == false) {
      return(<Image source={require('PickOne/src/images/dog_annoyed02.png')} style={{width: 200, height: 200}}/>);
    }
    if (this.props.type == 'audio') {
      return(
        <TouchableHighlight onPress={this._onPressAudio}>
          <Image source={require('PickOne/src/images/audioOn.png')} style={{borderColor: 'black', borderRadius: 3, borderWidth: 3, width: 100, height: 100}}/>
        </TouchableHighlight>
      );
    } else if (this.props.type == 'image') {
      return(
        <Image source={require(this.props.stimulus)} style={{borderColor: 'black', borderRadius: 3, borderWidth: 3, width: 100, height: 100}}/>
      );
    } else {
      return(
        <TouchableHighlight onPress={(e) => this._onPressStimulus(e)} style={{borderColor: 'black', borderRadius: 3, borderWidth: 3, width: 200, height: 200}}>
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 50}}>
              { this.props.stimulus }
            </Text>
          </View>
        </TouchableHighlight>
      );
    }
  }
}

export default Stimulus;
