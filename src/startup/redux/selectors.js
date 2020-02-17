import { createSelector } from 'reselect';

export const getTasksSelector = ({ todos }) => todos.tasks;

export const getIsSortedByPrioritySelector = ({ todos }) => todos.isSortedByPriority;

export const getActivePriorityFilterSelector = ({ todos }) => todos.activePriorityFilter;

export const getCountOfUncompleted = createSelector(
  getTasksSelector,
  tasks => (
    tasks.filter(task => !task.completed).length
  ),
);

export const getAllTasksCount = createSelector(
  getTasksSelector,
  tasks => tasks.length,
);

export const getSortedByPriorityTasks = createSelector(
  [getTasksSelector, getIsSortedByPrioritySelector],
  (tasks, isSortedByPriority) => {
    if (isSortedByPriority) {
      return [...tasks].sort((a, b) => {
        const priorityValues = {
          low: 1,
          medium: 2,
          high: 3,
        };

        return priorityValues[b.priority] - priorityValues[a.priority];
      });
    }

    return tasks;
  },
);

export const getTasks = createSelector(
  getSortedByPriorityTasks,
  getActivePriorityFilterSelector,
  (tasks, activePriorityFilter) => {
    if (activePriorityFilter) {
      return tasks.filter(task => task.priority === activePriorityFilter);
    }

    return tasks;
  },
);
