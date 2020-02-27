import axios from 'axios';

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

    axios.get('http://localhost:9000/all')
      .then(({ data }) => dispatch(saveTodos(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const createNewTodoRequest = ({ title, priority }) => (
  (dispatch) => {
    dispatch(setLoading(true));

    axios.post('http://localhost:9000/create', {
      title,
      priority,
    })
      .then(({ data }) => dispatch(addTodo(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const deleteTodoRequest = id => (
  (dispatch) => {
    dispatch(setLoading(true));

    axios.delete(`http://localhost:9000/delete/${id}`)
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

    axios.put('http://localhost:9000/update', {
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

    axios.put(`http://localhost:9000/updateAllStatuses/${newStatus}`)
      .then(() => dispatch(toggleAllTodosCompleted(newStatus)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export const deleteAllCompletedTodosRequest = () => (
  (dispatch) => {
    dispatch(setLoading(true));

    axios.delete('http://localhost:9000/deleteAllCompleted')
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

    axios.put('http://localhost:9000/update', {
      ...taskToUpdate,
      completed: !taskToUpdate.completed,
    })
      .then(() => dispatch(toggleCompleted(id)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);
