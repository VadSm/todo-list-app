import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000/',
});

const todosAPI = {
  getTodos() {
    return instance.get('all');
  },
  createTodo(newTodo) {
    return instance.post('create', newTodo);
  },
  deleteTodo(id) {
    return instance.delete(`delete/${id}`);
  },
  updateTodo(editedTodo) {
    return instance.put('update', editedTodo);
  },
  updateAllStatuses(newStatus) {
    return instance.put(`updateAllStatuses/${newStatus}`);
  },
  deleteAllCompleted() {
    return instance.delete('deleteAllCompleted');
  },
};

export default todosAPI;
