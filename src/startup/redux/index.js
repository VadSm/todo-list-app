/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

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

  return store;
};

export default configureStore();
