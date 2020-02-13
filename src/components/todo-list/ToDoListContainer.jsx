import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import NewTodoForm from 'components/todo-list/controls/NewTodoForm';
import ToDoItem from 'components/todo-list/ToDoItem';
import CompletedControlsSection from 'components/todo-list/controls/CompletedControlsSection';
import FilterControlsSection from 'components/todo-list/controls/FilterControlsSection';
import PriorityControlsSection from 'components/todo-list/controls/PriorityControlsSection';

const ToDoListContainer = ({ tasks, isSortedByPriority, activePriorityFilter }) => {
  const { filter } = useParams();

  const renderTasks = (data) => {
    let preparedTasks = data.filter((task) => {
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

    if (activePriorityFilter) {
      preparedTasks = preparedTasks.filter(task => task.priority === activePriorityFilter);
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
          <PriorityControlsSection
            activePriorityFilter={activePriorityFilter}
            isSortedByPriority={isSortedByPriority}
          />
        </Fragment>
      ) : (
        <h2 className="no-todos-title">You have not any tasks yet</h2>
      )}
    </div>
  );
};

export default connect(({ todos: { tasks, isSortedByPriority, activePriorityFilter } }) => ({
  tasks,
  isSortedByPriority,
  activePriorityFilter,
}))(ToDoListContainer);
