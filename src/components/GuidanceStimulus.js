/**/

import React from 'react';

import Stimulus from './Stimulus';

class GuidanceStimulus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Stimulus type={this.props.type}>
      </Stimulus>
    );
  }
}

export default GuidanceStimulus;
