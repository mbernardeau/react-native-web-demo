import React from 'react';
import ReactNative, {
  View,
} from 'react-native';

import Viewer from './Viewer';
import Navbar from './Navbar';

export default () => (
  <View style={{ flex: 1 }}>
    <Navbar />
    <Viewer />
  </View>
);
