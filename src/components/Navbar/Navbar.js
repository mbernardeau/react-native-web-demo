import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import NavigationBar from './nav';

class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
    <View>
      <NavigationBar title={{title: this.props.title}} />
    </View>
    );
  }
}

export default Navbar;
