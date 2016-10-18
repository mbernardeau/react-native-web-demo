import { connect } from 'react-redux';
import Viewer from './Viewer';
import { fetchPostsIfNeeded } from '../../redux/actions';

const mapStateToProps = (state) => ({
  thread: state.postsBySubreddit[state.selectedSubreddit],
  selectedSubreddit: state.selectedSubreddit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (subreddit) => dispatch(fetchPostsIfNeeded(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
