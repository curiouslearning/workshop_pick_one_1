/**/

import PropTypes from 'prop-types';
import React from 'react';

import Stimulus from './Stimulus';

class GuidanceStimulus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stimulus stimulus={this.props.guidanceId}>
      </Stimulus>
    );
  }
}

GuidanceStimulus.propTypes = {
  guidanceId: PropTypes.string.isRequired
};

export default GuidanceStimulus;
