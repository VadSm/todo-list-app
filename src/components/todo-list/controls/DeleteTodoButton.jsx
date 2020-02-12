/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from 'startup/redux/actions';

const DeleteTodoButton = ({ taskId, deleteTodo }) => {
  const handleClick = () => {
    deleteTodo(taskId);
  };

  return (
    <button type="button" onClick={handleClick} className="delete-todo-btn" />
  );
};

export default connect(null, {
  deleteTodo,
})(DeleteTodoButton);
