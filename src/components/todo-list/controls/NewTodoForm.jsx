import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'startup/redux/actions';

import CustomInput from 'components/common/CustomInput';
import CustomSelect from 'components/common/CustomSelect';

const priorityOptions = [
  {
    id: 'high',
    title: 'High',
  },
  {
    id: 'medium',
    title: 'Medium',
  },
  {
    id: 'low',
    title: 'Low',
  },
];

const NewTodoForm = ({ addTodo }) => {
  const [newTodo, changeTodoValue] = useState('');
  const [priority, changePriority] = useState('Medium');

  const handleChange = ({ target }) => {
    changeTodoValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title: newTodo,
      priority,
    });
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
      <CustomSelect
        options={priorityOptions}
        defaultValue={priority}
        onChange={changePriority}
        className={`priority-select ${!newTodo ? 'hidden' : ''}`}
      />
    </form>
  );
};

export default connect(null, {
  addTodo,
})(NewTodoForm);
