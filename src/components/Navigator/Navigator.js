import React, {PropTypes } from 'react';

import ReactNative, { View } from 'react-native';

import Navbar from './Navbar';
import Viewer from '../Viewer';

const renderSubreddit = <Viewer />;
const renderComments = <View />;

const routeRender = {
  subreddit: renderSubreddit,
  comments: renderComments,
};

const Navigator = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      {routeRender[route]}
    </View>
  );
};

Navigator.propTypes = {
  route: PropTypes.string,
};

export default Navigator;
