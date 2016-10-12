import { postsBySubreddit, selectedSubreddit } from './reddit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsBySubreddit: postsBySubreddit,
  selectedSubreddit: selectedSubreddit,
});

export default rootReducer;
