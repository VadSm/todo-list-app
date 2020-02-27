/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

const configureStore = () => {
  const store = createStore(
    reducers,
    // persistedState,
    compose(
      applyMiddleware(thunk),
      // eslint-disable-next-line no-undef
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  // store.subscribe(() => {
  //   saveState({
  //     todos: store.getState().todos,
  //   });
  // });

  return store;
};

export default configureStore();
