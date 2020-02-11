export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const toggleCompleted = payload => ({
  type: TOGGLE_COMPLETED,
  payload,
});
