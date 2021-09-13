import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface ProductsState {
  loading: boolean,
  products: Array<Product>,
  error: any, // TO DO: type this better (specific)
};

const initialState = {
  loading: true,
  products: [],
  error: null,
} as ProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRequest(state){
      state.loading = true;
    },
    productsSuccess(state, action: PayloadAction<Array<Product>>){
      state.loading = false;
      state.products = action.payload;
    },
    productsError(state, action: PayloadAction<any>){
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const setProducts = createAction<void>("products/setProducts");

export default productsSlice.reducer;
export const { productsRequest, productsSuccess, productsError } = productsSlice.actions;