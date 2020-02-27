/* eslint-disable no-underscore-dangle */
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import todos from './reducers/todos';
import filters from './reducers/filters';

const rootReducer = combineReducers({
  todos,
  filters,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      // eslint-disable-next-line no-undef
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
};

export default configureStore();
