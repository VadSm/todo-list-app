import { combineReducers } from 'redux';

import { ADD_TODO } from './actions';

const initialState = {
  tasks: [],
};

const todos = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
