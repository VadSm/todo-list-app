export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const toggleCompleted = payload => ({
  type: TOGGLE_COMPLETED,
  payload,
});

export const editTodo = payload => ({
  type: EDIT_TODO,
  payload,
});
