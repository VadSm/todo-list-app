/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getFilteredByPriorityTasks, getActivePriorityFilter, checkIsLoading } from 'startup/redux/selectors';
import { getTodosRequest } from 'startup/redux/thunks';

import NewTodoForm from 'components/todo-list/controls/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';
import CompletedControlsSection from 'components/todo-list/controls/CompletedControlsSection';
import FilterControlsSection from 'components/todo-list/controls/FilterControlsSection';
import PriorityControlsSection from 'components/todo-list/controls/PriorityControlsSection';
import LoadingIndicator from 'components/ui/LoadingIndicator';

const ToDoListContainer = ({
  tasks,
  activePriorityFilter,
  dispatch,
  isLoading,
}) => {
  const { filter } = useParams();

  useEffect(() => {
    dispatch(getTodosRequest());
  }, []);

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
      {isLoading && <LoadingIndicator />}
      <NewTodoForm />
      {activePriorityFilter || tasks.length > 0 ? (
        <Fragment>
          <ul className="todo-list">
            {renderTasks(tasks)}
          </ul>
          <CompletedControlsSection />
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
  isLoading: checkIsLoading(state),
}))(ToDoListContainer);
