import React from 'react';
import { connect } from 'react-redux';

import NewTodoForm from 'components/todo-list/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';

const ToDoListContainer = ({ tasks }) => {
  const renderTasks = data => (
    data.map(task => (
      <ToDoItem key={task.id} data={task} />
    ))
  );

  return (
    <div className="todo-list-container">
      <NewTodoForm />
      {tasks.length > 0 ? (
        <ul className="todo-list">
          {renderTasks(tasks)}
        </ul>
      ) : (
        <h2 className="no-todos-title">You have not any tasks yet</h2>
      )}
    </div>
  );
};

export default connect(({ todos: { tasks } }) => ({
  tasks,
}))(ToDoListContainer);
