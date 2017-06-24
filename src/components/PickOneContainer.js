/**/

import React from 'react';
import { View } from 'react-native';

import GuidanceContainer from './GuidanceContainer';
import TargetContainer from './TargetContainer';

class PickOneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    }
  }

  // _newSlide() {
  //   this.setState({arraySize: 4, objectIds: ['a', 'b', 'c', 'd'], targetId: 'a', selected: undefined});
  // }

  _onPressTarget(objId, target) {
    console.log('target pressed!');
    if (this.props.onPress) {
      this.props.onPress(objId, target);
      // this._newSlide();
    }

    // this._newSlide();
  }

  render() {
    return(
      <View style={{
          flex: 1,
        }}>
        <GuidanceContainer style={{flex: 1}}>
        </GuidanceContainer>
        <TargetContainer arraySize={this.props.arraySize} objectIds={this.props.objectIds} targetId={this.props.targetId} selected={this.props.selected} onPress={(objId, target) => this._onPressTarget(objId, target)} style={{flex: 2}}>
        </TargetContainer>
      </View>
    );
  }
}

export default PickOneContainer;
