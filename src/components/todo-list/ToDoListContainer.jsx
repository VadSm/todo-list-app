import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import NewTodoForm from 'components/todo-list/controls/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';
import CompletedControlsSection from 'components/todo-list/controls/CompletedControlsSection';
import FilterControlsSection from 'components/todo-list/controls/FilterControlsSection';
import SortingControlsSection from 'components/todo-list/controls/SortingControlsSection';

const ToDoListContainer = ({ tasks, isSortedByPriority }) => {
  const { filter } = useParams();

  const renderTasks = (data) => {
    const preparedTasks = data.filter((task) => {
      switch (filter) {
        case 'done':
          return task.completed;
        case 'active':
          return !task.completed;
        default:
          return task;
      }
    });

    if (isSortedByPriority) {
      preparedTasks.sort((a, b) => {
        const priorityValues = {
          low: 1,
          medium: 2,
          high: 3,
        };

        return priorityValues[b.priority] - priorityValues[a.priority];
      });
    }

    return preparedTasks.map(task => (
      <ToDoItem key={task.id} data={task} />
    ));
  };

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
          <FilterControlsSection activeFilter={filter} />
          <SortingControlsSection isSortedByPriority={isSortedByPriority} />
        </Fragment>
      ) : (
        <h2 className="no-todos-title">You have not any tasks yet</h2>
      )}
    </div>
  );
};

export default connect(({ todos: { tasks, isSortedByPriority } }) => ({
  tasks,
  isSortedByPriority,
}))(ToDoListContainer);
