import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomInput from 'components/common/CustomInput';

import { editTodo } from 'startup/redux/actions';

const EditTodoForm = ({
  taskId,
  defaultValue,
  toggleEditing,
  editTodo,
}) => {
  const [newValue, changeValue] = useState(defaultValue);
  console.log(editTodo);

  const handleChange = ({ target }) => {
    changeValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({ id: taskId, newValue });
    toggleEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <CustomInput
        withRef
        className="edit-todo-input"
        value={newValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default connect(() => ({}), {
  editTodo,
})(EditTodoForm);
