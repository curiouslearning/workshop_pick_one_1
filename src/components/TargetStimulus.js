/**/

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
      <Stimulus stimulus={this.props.stimulus} onPress={() => this._onPressTarget(this.props.stimulus)} selected={this.props.selected} target={this.props.target}>
      </Stimulus>
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
