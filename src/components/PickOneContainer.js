/*
 * PickOneContainer
 *
 * PickOneContainer contains:
 * - GuidanceContainer for the guidance stimulus, and
 * - TargetContainer for the target and foils.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import GuidanceContainer from './GuidanceContainer';
import TargetContainer from './TargetContainer';

class PickOneContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressTarget(objID, target) {
    if (this.props.onPress) {
      this.props.onPress(objID, target);
    }
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <GuidanceContainer guidanceID={this.props.guidanceID} />
        </View>
        <View style={{flex: 2}}>
          <TargetContainer
            arraySize={this.props.arraySize}
            dimensions={this.props.dimensions}
            objArray={this.props.objArray}
            objectIDs={this.props.objectIDs}
            onPress={(objID, target) => this._onPressTarget(objID, target)}
            selected={this.props.selected}
            targetID={this.props.targetID} />
        </View>
      </View>
    );
  }
}

PickOneContainer.propTypes = {
  arraySize: PropTypes.number.isRequired,
  dimensions: PropTypes.arrayOf(PropTypes.number.isRequired),
  guidanceID: PropTypes.string.isRequired,
  objArray: PropTypes.arrayOf(PropTypes.object.isRequired),
  objectIDs: PropTypes.arrayOf(PropTypes.string.isRequired),
  onPress: PropTypes.func,
  selected: PropTypes.string,
  targetID: PropTypes.string.isRequired
};

export default PickOneContainer;
