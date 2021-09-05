import { createSlice } from "@reduxjs/toolkit";
// import * as actionTypes from './cart-types';
import { createAction } from "@reduxjs/toolkit";
import { productsResponse } from '../../dummydata/dummy_products';
import { current } from "@reduxjs/toolkit";


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
        addToCart:(state, action) => {
            let item = state.products.find((prod) => prod.item_id === action.payload);
            let inCart = state.cartItems.find((item) =>
                item.item_id === action.payload ? true : false
            )
            return {
                ...state,
                cartItems: inCart ? 
                    state.cartItems.map(item => 
                        item.item_id === action.payload ? 
                            { ...item, quantity: item.quantity + 1 } : 
                            item
                ) : 
                [...state.cartItems, { ...item, quantity: 1 }]
            }      
        },
        removeFromCart:(state, action) => {
            return {
                ...state,  
                cart: state.cartItems.filter((item) => item.item_id !== action.payload.id)
            }
        },
        adjustQuantity: (state, action) => {
            return {
                ...state,  
                cart: state.cartItems.map((item) => item.item_id !== action.payload.id ? {
                    ...item, quantity: action.payload.quantity} : 
                    item
                )
            }
        },
        loadCurrentItem: (state, action) => {
            return {
                ...state,  
                currentItem: action.payload
            }
        },
    },
});

// export const addToCart = createAction('ADD_TO_CART');
// export const removeFromCart = createAction('REMOVE_FROM_CART');
// export const adjustQuantity = createAction('ADJUST_QUANTITY');
// export const loadCurrentItem = createAction('LOAD_CURRENT_ITEM');

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
