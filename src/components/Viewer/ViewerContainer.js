import { connect } from 'react-redux';
import Viewer from './Viewer';
import { fetchPostsIfNeeded, goToPost } from '../../redux/actions';

const mapStateToProps = (state) => ({
  thread: state.postsBySubreddit[state.selectedSubreddit],
  selectedSubreddit: state.selectedSubreddit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (subreddit) => dispatch(fetchPostsIfNeeded(subreddit)),
  goToPost: (postId) => () => dispatch(goToPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
