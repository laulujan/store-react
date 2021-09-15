import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';

export const rootReducer = (history: History) =>combineReducers({
  products: productsReducer,
  router: connectRouter(history),
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
