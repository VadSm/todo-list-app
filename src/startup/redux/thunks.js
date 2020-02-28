import todosAPI from 'api';
import { toast } from 'react-toastify';

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

const asyncRequest = (dispatch, APIMethod, resultCallback) => {
  dispatch(setLoading(true));

  APIMethod()
    .then(resultCallback)
    .catch(({ message }) => toast.error(`Error: ${message}`))
    .finally(() => dispatch(setLoading(false)));
};

export const getTodosRequest = () => (
  (dispatch) => {
    asyncRequest(
      dispatch,
      todosAPI.getTodos,
      ({ data }) => dispatch(saveTodos(data)),
    );
  }
);

export const createNewTodoRequest = ({ title, priority }) => (
  (dispatch) => {
    asyncRequest(
      dispatch,
      () => todosAPI.createTodo({ title, priority }),
      ({ data }) => dispatch(addTodo(data)),
    );
  }
);

export const deleteTodoRequest = id => (
  (dispatch) => {
    asyncRequest(
      dispatch,
      () => todosAPI.deleteTodo(id),
      ({ data }) => dispatch(deleteTodo(data)),
    );
  }
);

export const updateTodoRequest = ({ id, newValue }) => (
  (dispatch, getState) => {
    const { todos: { tasks } } = getState();
    const taskToUpdate = tasks.find(task => task.id === id);

    asyncRequest(
      dispatch,
      () => todosAPI.updateTodo({
        ...taskToUpdate,
        title: newValue,
      }),
      () => dispatch(editTodo({ id, newValue })),
    );
  }
);

export const updateAllTodoStatusesRequest = newStatus => (
  (dispatch) => {
    asyncRequest(
      dispatch,
      () => todosAPI.updateAllStatuses(newStatus),
      () => dispatch(toggleAllTodosCompleted(newStatus)),
    );
  }
);

export const deleteAllCompletedTodosRequest = () => (
  (dispatch) => {
    asyncRequest(
      dispatch,
      () => todosAPI.deleteAllCompleted(),
      () => dispatch(deleteAllCompleted()),
    );
  }
);

export const toggleTodoStatusRequest = id => (
  (dispatch, getState) => {
    const { todos: { tasks } } = getState();
    const taskToUpdate = tasks.find(task => task.id === id);

    asyncRequest(
      dispatch,
      () => todosAPI.updateTodo({
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      }),
      () => dispatch(toggleCompleted(id)),
    );
  }
);
