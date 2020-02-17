import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { connect } from 'react-redux';

import { editTodo } from 'startup/redux/actions';

const EditTodoForm = ({
  taskId,
  defaultValue,
  toggleEditing,
  dispatch,
}) => {
  const [newValue, changeValue] = useState(defaultValue);
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleChange = ({ target: { value } }) => {
    changeValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({ id: taskId, newValue }),
    );
    toggleEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <input
        ref={inputElement}
        className="edit-todo-input"
        value={newValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default connect()(EditTodoForm);
