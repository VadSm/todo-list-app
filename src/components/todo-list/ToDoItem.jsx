import React from 'react';

const ToDoItem = ({ title }) => {
  return (
    <li className="todo-item">
      {title}
    </li>
  );
};

export default ToDoItem;
