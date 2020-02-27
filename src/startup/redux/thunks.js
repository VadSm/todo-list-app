import axios from 'axios';

import {
  setLoading,
  saveTodos,
  addTodo,
  deleteTodo,
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
