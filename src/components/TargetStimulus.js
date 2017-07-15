/*
 * TargetStimulus
 *
 * TargetStimulus is a target/foil-specific Stimulus.
 */

import PropTypes from 'prop-types';
import React from 'react';

import Stimulus from './Stimulus';

class TargetStimulus extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressTarget(objId) {
    if (this.props.onPress) {
      this.props.onPress(objId);
    }
  }

  render() {
    return(
      <Stimulus
        onPress={() => this._onPressTarget(this.props.stimulus)}
        selected={this.props.selected}
        stimulus={this.props.stimulus}
        target={this.props.target} />
    );
  }
}

TargetStimulus.propTypes = {
  onPress: PropTypes.func,
  selected: PropTypes.string,
  stimulus: PropTypes.string.isRequired,
  target: PropTypes.bool.isRequired
};

export default TargetStimulus;
