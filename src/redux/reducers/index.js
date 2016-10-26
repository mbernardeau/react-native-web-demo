import { postsBySubreddit, selectedSubreddit, comments } from './reddit';
import { navigation } from './navigation';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  comments,
  navigation,
});

export default rootReducer;
