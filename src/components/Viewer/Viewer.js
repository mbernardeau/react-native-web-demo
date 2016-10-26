import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import PostCell from './PostCell';

class Viewer extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    thread: PropTypes.object,
    selectedSubreddit: PropTypes.string,
    goToPost: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { ds };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.thread){
      this.setState((s) => ({
        ds: s.ds.cloneWithRows(nextProps.thread.items),
      }));
    }
  }

  componentDidMount(){
    this.props.fetchPosts(this.props.selectedSubreddit);
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.ds}
          renderRow={(post) => <PostCell {...post} goToPost={this.props.goToPost(post.permalink)} />}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

export default Viewer;
