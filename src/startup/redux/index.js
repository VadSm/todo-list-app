/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import reducers from './reducers';

const configureStore = () => {
  const store = createStore(
    reducers,
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};

export default configureStore();
