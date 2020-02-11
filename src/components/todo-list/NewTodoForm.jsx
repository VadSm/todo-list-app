import React, { useState } from 'react';

import CustomInput from 'components/common/CustomInput';

const NewTodoForm = () => {
  const [newTodo, changeTodoValue] = useState('');

  const handleChange = ({ target }) => {
    changeTodoValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTodo);
    changeTodoValue('');
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        className="new-todo-input"
        placeholder="Add a new task"
        onChange={handleChange}
        value={newTodo}
      />
    </form>
  );
};

export default NewTodoForm;
