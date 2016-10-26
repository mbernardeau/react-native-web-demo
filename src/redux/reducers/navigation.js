import { SELECT_SUBREDDIT } from '../actions';

const initState = {
  route: 'subreddit',
  showPicker: false,
};

export const navigation = ( state = initState, action) => {
  switch (action.type){
    case 'SET_ROUTE': {
      return {
        ...state,
        route: action.route,
        showPicker: false,
      };
    }
    case SELECT_SUBREDDIT: {
      return {
        ...state,
        showPicker: false,
      };
    }
    case 'TOGGLE_PICKER': {
      return {
        ...state,
        showPicker: !state.showPicker,
      };
    }
    default:
      return state;
  }
};
