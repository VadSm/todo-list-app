import React from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from 'startup/redux/actions';

const ToDoItem = ({ data: { id, title, completed }, toggleCompleted }) => {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span className="title">{title}</span>
    </li>
  );
};

export default connect(() => ({}), {
  toggleCompleted,
})(ToDoItem);
