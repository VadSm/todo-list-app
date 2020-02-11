import React from 'react';

import CustomInput from 'components/common/CustomInput';

const ToDoList = () => {
  return (
    <React.Fragment>
      <CustomInput type="text" className="new-todo-input" placeholder="Add a new task" />
      <ul className="todo-list">
        123123
      </ul>
    </React.Fragment>
  );
};

export default ToDoList;
