/**/

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GuidanceStimulus guidanceId={this.props.guidanceId}>
        </GuidanceStimulus>
      </View>
    );
  }
}

GuidanceContainer.propTypes = {
  guidanceId: PropTypes.string.isRequired
};

export default GuidanceContainer;
