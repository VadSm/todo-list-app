import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from 'components/todo-list/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';
import CompletedControlsSection from 'components/todo-list/CompletedControlsSection';

const ToDoListContainer = ({ tasks }) => {
  const renderTasks = data => (
    data.map(task => (
      <ToDoItem key={task.id} data={task} />
    ))
  );

  const countOfUncompleted = tasks.filter(task => !task.completed).length;

  return (
    <div className="todo-list-container">
      <NewTodoForm />
      {tasks.length > 0 ? (
        <Fragment>
          <ul className="todo-list">
            {renderTasks(tasks)}
          </ul>
          <CompletedControlsSection
            allTasksCount={tasks.length}
            countOfUncompleted={countOfUncompleted}
          />
        </Fragment>
      ) : (
        <h2 className="no-todos-title">You have not any tasks yet</h2>
      )}
    </div>
  );
};

export default connect(({ todos: { tasks } }) => ({
  tasks,
}))(ToDoListContainer);
