/*
 * GuidanceStimulus
 *
 * GuidanceStimulus is a guidance stimulus-specific Stimulus.
 */

import PropTypes from 'prop-types';
import React from 'react';

import Stimulus from './Stimulus';

class GuidanceStimulus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stimulus stimulus={this.props.guidanceID} />
    );
  }
}

GuidanceStimulus.propTypes = {
  guidanceID: PropTypes.string.isRequired
};

export default GuidanceStimulus;
