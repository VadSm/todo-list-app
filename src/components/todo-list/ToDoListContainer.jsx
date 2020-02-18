import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getFilteredByPriorityTasks, getActivePriorityFilter } from 'startup/redux/selectors';

import NewTodoForm from 'components/todo-list/controls/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';
import CompletedControlsSection from 'components/todo-list/controls/CompletedControlsSection';
import FilterControlsSection from 'components/todo-list/controls/FilterControlsSection';
import PriorityControlsSection from 'components/todo-list/controls/PriorityControlsSection';

const ToDoListContainer = ({ tasks, activePriorityFilter }) => {
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

    return preparedTasks.map(task => (
      <ToDoItem key={task.id} data={task} />
    ));
  };

  return (
    <div className="todo-list-container">
      <NewTodoForm />
      {activePriorityFilter || tasks.length > 0 ? (
        <Fragment>
          <ul className="todo-list">
            {renderTasks(tasks)}
          </ul>
          <CompletedControlsSection
            allTasksCount={tasks.length}
          />
          <FilterControlsSection activeFilter={filter} />
          <PriorityControlsSection activePriorityFilter={activePriorityFilter} />
        </Fragment>
      ) : (
        <h2 className="no-todos-title">You have not any tasks yet</h2>
      )}
    </div>
  );
};

export default connect(state => ({
  tasks: getFilteredByPriorityTasks(state),
  activePriorityFilter: getActivePriorityFilter(state),
}))(ToDoListContainer);
