import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from 'startup/redux/actions';

import CustomCheckbox from 'components/common/CustomCheckbox';
import EditTodoForm from 'components/todo-list/controls/EditTodoForm';
import DeleteTodoButton from 'components/todo-list/controls/DeleteTodoButton';

const ToDoItem = ({
  data: {
    id,
    title,
    completed,
    priority,
  },
  toggleCompleted,
}) => {
  const [isEditing, toggleEditing] = useState(false);

  const toggleEditMode = useCallback(
    () => {
      toggleEditing(!isEditing);
    },
    [isEditing],
  );

  const handleChange = () => {
    toggleCompleted(id);
  };

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
      onDoubleClick={toggleEditMode}
      onBlur={toggleEditMode}
    >
      {isEditing ? (
        <EditTodoForm taskId={id} defaultValue={title} toggleEditing={toggleEditing} />
      ) : (
        <div className="view">
          <div className="toggle-part">
            <CustomCheckbox
              className="toggle-completed-checkbox"
              isChecked={completed}
              onChange={handleChange}
            />
          </div>
          <div className="title-part">
            <span className="title">{title}</span>
            <span className={`priority ${priority || ''}`}>{priority}</span>
          </div>
          <DeleteTodoButton taskId={id} />
        </div>
      )}
    </li>
  );
};

export default connect(null, {
  toggleCompleted,
})(ToDoItem);
