import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createNewTodoRequest } from 'startup/redux/thunks';

import CustomInput from 'components/ui/CustomInput';
import CustomSelect from 'components/ui/CustomSelect';

const priorityOptions = [
  {
    id: 'high',
    title: 'High',
    value: 'high',
  },
  {
    id: 'medium',
    title: 'Medium',
    value: 'medium',
  },
  {
    id: 'low',
    title: 'Low',
    value: 'low',
  },
];

const NewTodoForm = ({ dispatch }) => {
  const [newTodo, changeTodoValue] = useState('');
  const [priority, changePriority] = useState('medium');

  const handleChange = ({ target: { value } }) => {
    changeTodoValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTodo({
    //   title: newTodo,
    //   priority,
    // }));
    dispatch(
      createNewTodoRequest({
        title: newTodo,
        priority,
      }),
    );
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
        defaultValue="Medium"
        onChange={changePriority}
        className={`priority-select ${!newTodo ? 'hidden' : ''}`}
      />
    </form>
  );
};

export default connect()(NewTodoForm);
