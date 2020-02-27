import axios from 'axios';

import { setLoading, saveTasks } from './actions';

export const getTasksRequest = () => (
  (dispatch) => {
    dispatch(setLoading(true));

    axios.get('http://localhost:9000/all')
      .then(({ data }) => dispatch(saveTasks(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);


// export const createNewTaskRequest = () => (
//   (dispatch) => {
//     dispatch(setLoading(true));

//     axios.get('http://localhost:9000/all')
//       .then(({ data }) => dispatch(saveTasks(data)))
//       .catch(err => console.error(err))
//       .finally(() => dispatch(setLoading(false)));
//   }
// );
