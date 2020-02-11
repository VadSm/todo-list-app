import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from 'startup/redux/actions';

import CustomCheckbox from 'components/common/CustomCheckbox';
import EditTodoForm from 'components/todo-list/EditTodoForm';
import DeleteTodoButton from 'components/todo-list/DeleteTodoButton';

const ToDoItem = ({ data: { id, title, completed }, toggleCompleted }) => {
  const [isEditing, toggleEditing] = useState(false);

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
      onDoubleClick={() => toggleEditing(true)}
      onBlur={() => toggleEditing(false)}
    >
      {isEditing ? (
        <EditTodoForm taskId={id} defaultValue={title} toggleEditing={toggleEditing} />
      ) : (
        <div className="view">
          <div className="toggle-part">
            <CustomCheckbox
              className="toggle-completed-checkbox"
              checked={completed}
              onChange={() => toggleCompleted(id)}
            />
          </div>
          <div className="title-part">
            <span className="title">{title}</span>
          </div>
          <DeleteTodoButton taskId={id} />
        </div>
      )}
    </li>
  );
};

export default connect(() => ({}), {
  toggleCompleted,
})(ToDoItem);
