import { combineReducers } from 'redux';

import generateID from 'utils/generateID';

import { ADD_TODO } from './actions';

const initialState = {
  tasks: [],
};

const todos = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: generateID(),
            title: payload,
            completed: false,
          }],
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
