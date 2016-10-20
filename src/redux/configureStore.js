import { Platform } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  let store;
  if (Platform.OS === 'web'){
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(
        thunkMiddleware,
      )),
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        thunkMiddleware,
      ),
    );
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
