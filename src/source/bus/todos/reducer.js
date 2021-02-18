import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TODOS_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.TODOS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.TODOS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };
    case types.TODOS_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

    default:
      return state
  }
};
