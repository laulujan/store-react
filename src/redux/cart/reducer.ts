import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types";

interface CartState {
    cartItems: Array<CartItem>,
    isVisible: boolean,
};

const initialState = {
    cartItems: [],
    isVisible: true, 
} as CartState;

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

            let item = action.payload;
            let inCart = state.cartItems.find((item) =>
                item.item_id === action.payload.item_id ? true : false
            )
            return {
                ...state,
                cartItems: inCart ? 
                    state.cartItems.map(item => 
                        item.item_id === action.payload.item_id ? 
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
        deleteCart: (state) => {
            return {
                ...state,  
                cartItems: [],
            }
        },
        toggleVisibility: (state, action) => {
            return {
                ...state, 
                isVisible: action.payload, 
            }
        }
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, deleteCart, toggleVisibility } = cartSlice.actions;
