export function setRoute (route){
  return {
    type: 'SET_ROUTE',
    route,
  };
}

export function toggleShowSubredditPicker(){
  return {
    type: 'TOGGLE_PICKER',
  };
}
