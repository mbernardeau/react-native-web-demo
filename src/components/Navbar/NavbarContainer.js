/* @flow */
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => ({
  title: state.selectedSubreddit || '',
});

export default connect(mapStateToProps)(Navbar);
