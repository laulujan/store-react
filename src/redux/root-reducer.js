import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer"

export const rootReducer = (history) =>combineReducers({
  products: productsReducer,
  router: connectRouter(history),
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
