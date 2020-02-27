import { createSelector } from 'reselect';

export const getTasks = ({ todos }) => todos.tasks;

export const getIsSortedByPriority = ({ todos }) => todos.isSortedByPriority;

export const getActivePriorityFilter = ({ todos }) => todos.activePriorityFilter;

export const checkIsLoading = ({ todos }) => todos.isLoading;

export const getCountOfUncompleted = createSelector(
  getTasks,
  tasks => (
    tasks.filter(task => !task.completed).length
  ),
);

export const getAllTasksCount = createSelector(
  getTasks,
  tasks => tasks.length,
);

export const getSortedByPriorityTasks = createSelector(
  getTasks,
  getIsSortedByPriority,
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

export const getFilteredByPriorityTasks = createSelector(
  getSortedByPriorityTasks,
  getActivePriorityFilter,
  (tasks, activePriorityFilter) => {
    if (activePriorityFilter) {
      return tasks.filter(task => task.priority === activePriorityFilter);
    }

    return tasks;
  },
);
