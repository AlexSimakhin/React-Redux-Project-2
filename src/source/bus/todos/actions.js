import {api} from '../../api';
import {types} from './types';

export const todosActions = Object.freeze({
  startFetching: () => {
    return { type: types.TODOS_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.TODOS_STOP_FETCHING }
  },
  fill: (payload) => {
    return { type: types.TODOS_FILL, payload }
  },
  setFetchingError: (error) => {
    return {
      type: types.TODOS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: () => async (dispatch) => {
    dispatch(todosActions.startFetching());

    const response = await api.getAllTodos.fetch();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(todosActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(todosActions.setFetchingError(error));
    }
    dispatch(todosActions.stopFetching());
  }
});
