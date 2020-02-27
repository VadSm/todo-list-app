/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';

// import { deleteTodo } from 'startup/redux/actions';
import { deleteTodoRequest } from 'startup/redux/thunks';

const DeleteTodoButton = ({ taskId, dispatch }) => {
  const handleClick = () => {
    // dispatch(deleteTodo(taskId));
    dispatch(deleteTodoRequest(taskId));
  };

  return (
    <button type="button" onClick={handleClick} className="delete-todo-btn" />
  );
};

export default connect()(DeleteTodoButton);
