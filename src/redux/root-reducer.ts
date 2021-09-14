import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer"
import { History } from "history";

export const rootReducer = (history: History<unknown>) =>combineReducers({
  products: productsReducer,
  router: connectRouter(history),
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
