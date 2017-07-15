/**/

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import GuidanceContainer from './GuidanceContainer';
import TargetContainer from './TargetContainer';

class PickOneContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressTarget(objId, target) {
    if (this.props.onPress) {
      this.props.onPress(objId, target);
    }
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <GuidanceContainer guidanceId={this.props.guidanceId}>
          </GuidanceContainer>
        </View>
        <View style={{flex: 2}}>
          <TargetContainer arraySize={this.props.arraySize} objArray={this.props.objArray} objectIds={this.props.objectIds} dimensions={this.props.dimensions} targetId={this.props.targetId} selected={this.props.selected} onPress={(objId, target) => this._onPressTarget(objId, target)}>
          </TargetContainer>
        </View>
      </View>
    );
  }
}

PickOneContainer.propTypes = {
  arraySize: PropTypes.number.isRequired,
  dimensions: PropTypes.arrayOf(PropTypes.number.isRequired),
  guidanceId: PropTypes.string.isRequired,
  objArray: PropTypes.arrayOf(PropTypes.object.isRequired),
  objectIds: PropTypes.arrayOf(PropTypes.string.isRequired),
  onPress: PropTypes.func,
  selected: PropTypes.string,
  targetId: PropTypes.string.isRequired
};

export default PickOneContainer;
