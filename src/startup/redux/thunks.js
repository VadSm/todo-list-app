import todosAPI from 'api';

import {
  setLoading,
  saveTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleAllTodosCompleted,
  deleteAllCompleted,
  toggleCompleted,
} from './actions';

export const getTodosRequest = () => (
  (dispatch) => {
    dispatch(setLoading(true));

    todosAPI.getTodos()
      .then(({ data }) => dispatch(saveTodos(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const createNewTodoRequest = ({ title, priority }) => (
  (dispatch) => {
    dispatch(setLoading(true));

    todosAPI.createTodo({ title, priority })
      .then(({ data }) => dispatch(addTodo(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const deleteTodoRequest = id => (
  (dispatch) => {
    dispatch(setLoading(true));

    todosAPI.deleteTodo(id)
      .then(() => dispatch(deleteTodo(id)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const updateTodoRequest = ({ id, newValue }) => (
  (dispatch, getState) => {
    const { todos: { tasks } } = getState();
    const taskToUpdate = tasks.find(task => task.id === id);

    dispatch(setLoading(true));

    todosAPI.updateTodo({
      ...taskToUpdate,
      title: newValue,
    })
      .then(() => dispatch(
        editTodo({ id, newValue }),
      ))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const updateAllTodoStatusesRequest = newStatus => (
  (dispatch) => {
    dispatch(setLoading(true));

    todosAPI.updateAllStatuses(newStatus)
      .then(() => dispatch(toggleAllTodosCompleted(newStatus)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const deleteAllCompletedTodosRequest = () => (
  (dispatch) => {
    dispatch(setLoading(true));

    todosAPI.deleteAllCompleted()
      .then(() => dispatch(deleteAllCompleted()))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const toggleTodoStatusRequest = id => (
  (dispatch, getState) => {
    const { todos: { tasks } } = getState();
    const taskToUpdate = tasks.find(task => task.id === id);

    dispatch(setLoading(true));

    todosAPI.updateTodo({
      ...taskToUpdate,
      completed: !taskToUpdate.completed,
    })
      .then(() => dispatch(toggleCompleted(id)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);
