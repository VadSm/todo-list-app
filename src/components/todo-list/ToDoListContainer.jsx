import React from 'react';

import NewTodoForm from 'components/todo-list/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';

const ToDoListContainer = () => {
  return (
    <div className="todo-list-container">
      <NewTodoForm />
      <ul className="todo-list">
        <ToDoItem title="test" />
        <ToDoItem title="test2" />
        <ToDoItem title="test3" />
      </ul>
    </div>
  );
};

export default ToDoListContainer;
