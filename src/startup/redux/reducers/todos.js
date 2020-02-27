import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_ALL_TODOS_COMPLETED,
  DELETE_ALL_COMPLETED,
  SET_LOADING,
  SAVE_TODOS,
} from 'startup/redux/actions';

const initialState = {
  tasks: [],
  isLoading: false,
};

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload,
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          const { id, newValue } = payload;
          if (task.id === id) {
            return {
              ...task,
              title: newValue,
            };
          }

          return task;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        }),
      };
    case TOGGLE_ALL_TODOS_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task => ({
          ...task,
          completed: payload,
        })),
      };
    case DELETE_ALL_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SAVE_TODOS:
      return {
        ...state,
        tasks: payload,
      };
    default:
      return state;
  }
};

export default todos;
