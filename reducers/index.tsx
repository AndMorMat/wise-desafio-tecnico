import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const RootReducers = combineReducers({
  user: userReducer
});