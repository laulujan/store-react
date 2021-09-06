import { createSlice } from "@reduxjs/toolkit";
import { productsResponse } from '../../dummydata/dummy_products';


const initialState = {
    //USING DUMMY DATA
    products: productsResponse.data,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeFromCart:(state, action) => {
            return {
                ...state,  
                cartItems: state.cartItems.filter((item) => item.item_id !== action.payload)
            }
        },
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
        increment: (state, action) => {
            return {
                ...state,  
                cartItems: state.cartItems.map((item) => item.item_id === action.payload ? {
                    ...item, quantity: item.quantity + 1} : 
                    item
                )
            }
        },
        decrement: (state, action) => {
            return {
                ...state,  
                cartItems: state.cartItems.map((item) => (item.item_id === action.payload && item.quantity > 1) ? {
                    ...item, quantity: item.quantity - 1} : 
                    item
                )
            }
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
