/* @flow */
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { toggleShowSubredditPicker, selectSubredditAndLoad } from '../../../redux/actions';

const mapStateToProps = (state) => ({
  title: state.selectedSubreddit || '',
  showSubredditPicker: state.navigation.showPicker,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSubredditPicker: () => dispatch(toggleShowSubredditPicker()),
  selectSubreddit: (newSubreddit) => dispatch(selectSubredditAndLoad(newSubreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
