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

  const handleChange = ({ target }) => {
    changeTodoValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
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
      <CustomSelect options={priorityOptions} defaultValue="Medium" />
      {/* <div className="custom-select">
        <select>
          <option>Test 1</option>
          <option>Test 2</option>
          <option>Test 3</option>
        </select>
      </div> */}
    </form>
  );
};

export default connect(null, {
  addTodo,
})(NewTodoForm);
