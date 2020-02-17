/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from 'startup/redux/actions';

import CustomCheckbox from 'components/ui/CustomCheckbox';
import EditTodoForm from 'components/todo-list/controls/EditTodoForm';
import DeleteTodoButton from 'components/todo-list/controls/DeleteTodoButton';

const ToDoItem = ({
  data: {
    id,
    title,
    completed,
    priority,
  },
  dispatch,
}) => {
  const [isEditing, toggleEditing] = useState(false);

  /*
    implementation of method from prevention the opening of edit form by fast clicking on item
  */
  // let timer = null;
  // let clicks = 0;
  // const handleDoubleClick = () => {
  //   clicks += 1;

  //   if (clicks === 1) {
  //     timer = setTimeout(() => {
  //       clicks = 0;
  //     }, 200);
  //   } else {
  //     clearTimeout(timer);
  //     toggleEditing(true);
  //     clicks = 0;
  //   }
  // };

  const handleDoubleClick = useCallback(() => {
    toggleEditing(true);
  }, []);

  const handleBlur = useCallback(() => {
    toggleEditing(false);
  }, []);

  const handleChange = useCallback(() => {
    dispatch(toggleCompleted(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
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

export default connect()(ToDoItem);
