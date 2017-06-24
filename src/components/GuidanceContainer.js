/**/

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
        <GuidanceStimulus type={'audio'}>
        </GuidanceStimulus>
      </View>
    );
  }
}

export default GuidanceContainer;
