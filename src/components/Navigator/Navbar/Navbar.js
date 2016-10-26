import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import NavigationBar from './nav';

class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    toggleSubredditPicker: PropTypes.func.isRequired,
    selectSubreddit: PropTypes.func.isRequired,
    showSubredditPicker: PropTypes.bool,
  }

  constructor(props){
    super(props);
    this.state = {
      text: props.title,
    };
  }

  componentWillReceiveProps(nextProps){
    if (this.props.title != nextProps.title) {
      this.setState({ text: nextProps.title });
    }
  }

  submit = () => {
    this.props.selectSubreddit(this.state.text);
  }

  render() {
    const titleConf = {
      title: this.props.showSubredditPicker ?
        (<TextInput
            style={styles.textInput}
            value={this.state.text}
            autoFocus
            onSubmitEditing={this.submit}
            onBlur={this.submit}
            onChangeText={(text) => this.setState({text})}
         />)
        :
        '/r/' + this.props.title,
    };
    return (
      <NavigationBar
        title={titleConf}
        leftButton={this.props.showSubredditPicker ? { title: '' } : { title: '☰', handler: this.props.toggleSubredditPicker }}
      />);
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 150,
    height: 40,
  },
});

export default Navbar;
