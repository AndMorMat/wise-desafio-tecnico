import { createStore } from 'redux';
import { RootReducers } from '../reducers';
export const Store = createStore(RootReducers);