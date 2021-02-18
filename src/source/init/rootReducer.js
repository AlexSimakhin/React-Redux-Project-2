import {combineReducers} from 'redux';

import {todosReducer as todos} from '../bus/todos/reducer';

export const rootReducer = combineReducers({
  todos
});