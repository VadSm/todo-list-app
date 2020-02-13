export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_ALL_TODOS_COMPLETED = 'TOGGLE_ALL_TODOS_COMPLETED';
export const DELETE_ALL_COMPLETED = 'DELETE_ALL_COMPLETED';
export const TOGGLE_SORTING_BY_PRIORITY = 'TOGGLE_SORTING_BY_PRIORITY';
export const SET_ACTIVE_PRIORITY_FILTER = 'SET_ACTIVE_PRIORITY_FILTER';

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

export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload,
});

export const toggleAllTodosCompleted = payload => ({
  type: TOGGLE_ALL_TODOS_COMPLETED,
  payload,
});

export const deleteAllCompleted = () => ({
  type: DELETE_ALL_COMPLETED,
});

export const toggleSortingByPriority = () => ({
  type: TOGGLE_SORTING_BY_PRIORITY,
});

export const setActivePriorityFilter = payload => ({
  type: SET_ACTIVE_PRIORITY_FILTER,
  payload,
});
