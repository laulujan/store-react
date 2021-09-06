import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRequest(state, action){
      state.loading = true;
    },
    productsSuccess(state, action){
      state.loading = false;
      state.products = action.payload;
    },
    productsError(state, action){
      state.loading = false;
      state.error = action.payload
    }
  },
});

export const setProducts = createAction("products/setProducts");

export default productsSlice.reducer;
export const { productsRequest, productsSuccess, productsError } = productsSlice.actions;