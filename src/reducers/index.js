import { combineReducers } from 'redux';
import { orders } from './orders';

const rootReducer = combineReducers({
  orders: orders
});

export default rootReducer;
