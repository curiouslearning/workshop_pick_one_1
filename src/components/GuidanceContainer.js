/*
 * GuidanceContainer
 *
 * GuidanceContainer is responsible for displaying a guidance stimulus.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import GuidanceStimulus from './GuidanceStimulus';

class GuidanceContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>
        <GuidanceStimulus guidanceID={this.props.guidanceID} />
      </View>
    );
  }
}

GuidanceContainer.propTypes = {
  guidanceID: PropTypes.string.isRequired
};

export default GuidanceContainer;
