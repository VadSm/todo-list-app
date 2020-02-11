/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const configureStore = () => {
  const store = createStore(
    reducers,
    persistedState,
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    });
  });

  return store;
};

export default configureStore();
