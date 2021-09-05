import { createSlice } from "@reduxjs/toolkit";
// import * as actionTypes from './cart-types';
import { createAction } from "@reduxjs/toolkit";
import { productsResponse } from '../../dummydata/dummy_products';


const initialState = {
    //USING DUMMY DATA
    products: productsResponse.data,
    cartItems: [],
    currentItem: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
        state.products = action.payload;
      },
  },
});

export const addToCart = createAction('ADD_TO_CART');
export const removeFromCart = createAction('REMOVE_FROM_CART');
export const adjustQuantity = createAction('ADJUST_QUANTITY');
export const loadCurrentItem = createAction('LOAD_CURRENT_ITEM');

export default cartSlice.reducer;
export const { setProducts } = cartSlice.actions;
