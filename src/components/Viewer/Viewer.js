import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  View,
} from 'react-native';

class Viewer extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    selectedSubreddit: PropTypes.string.isRequired,
  }
  componentDidMount(){
    this.props.fetchPosts(this.props.selectedSubreddit);
  }
  render(){
    return (
      <View>{JSON.stringify(this.props)}</View>
    );
  }
}

export default Viewer;
