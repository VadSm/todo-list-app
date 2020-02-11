import React, { useState } from 'react';

import CustomInput from 'components/common/CustomInput';

const NewTodoForm = () => {
  const [newTask, changeTask] = useState('');

  const handleChange = ({ target }) => {
    changeTask(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
    changeTask('');
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        className="new-todo-input"
        placeholder="Add a new task"
        onChange={handleChange}
        value={newTask}
      />
    </form>
  );
};

export default NewTodoForm;
