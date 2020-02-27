import { TOGGLE_SORTING_BY_PRIORITY, SET_ACTIVE_PRIORITY_FILTER } from 'startup/redux/actions';

const initialState = {
  isSortedByPriority: false,
  activePriorityFilter: '',
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SORTING_BY_PRIORITY:
      return {
        ...state,
        isSortedByPriority: !state.isSortedByPriority,
      };
    case SET_ACTIVE_PRIORITY_FILTER:
      return {
        ...state,
        activePriorityFilter: payload,
      };
    default:
      return state;
  }
};

export default filters;
