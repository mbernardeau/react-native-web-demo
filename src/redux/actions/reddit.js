export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

import { setRoute } from './navigation';

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  };
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  };
}

export function selectSubredditAndLoad(subreddit){
  return (dispatch) => {
    dispatch(selectSubreddit(subreddit));
    dispatch(fetchPosts(subreddit));
  };
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function fetchPost(permalink) {
  return dispatch => {
    dispatch(requestPosts(permalink));
    return fetch(`http://www.reddit.com/${permalink}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePost(permalink, json)));
  };
}

function receivePost(permalink, json){
  return {
    type: 'RECEIVE_POST',
    permalink,
    post: json,
  };
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  };
}

export function setPost(postId) {
  return {
    type: 'SET_POST',
    postId,
  };
}

export function goToPost(postId) {
  return (dispatch) => {
    dispatch(fetchPost(postId));
    dispatch(setRoute('comments'));
    dispatch(setPost(postId));
  };
}
