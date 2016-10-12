import { connect } from 'react-redux';
import Viewer from './Viewer';
import { fetchPostsIfNeeded } from '../../redux/actions';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (subreddit) => dispatch(fetchPostsIfNeeded(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
