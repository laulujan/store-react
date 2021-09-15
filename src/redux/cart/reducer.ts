import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface CartState {
    cartItems: Array<Product>,
    viewOnly: boolean,
};

const initialState = {
    cartItems: [],
    viewOnly: true, 
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeFromCart(state, action:PayloadAction<number>){
                state.cartItems = state.cartItems.filter((item) => item.item_id !== action.payload)
        },
        addToCart(state, action: PayloadAction<Product>) {
            const item = action.payload;
            const inCart = state.cartItems.find((item) => item.item_id === action.payload.item_id ? true : false)
            state.cartItems = inCart ? 
                    state.cartItems.map(item => item.item_id === action.payload.item_id ? { ...item, quantity: item.quantity + 1 } : item) :
                    [...state.cartItems, { ...item, quantity: 1 }]     
        },
        increment(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.map((item) => 
                    (item.item_id === action.payload) ? 
                        {...item, quantity: item.quantity + 1} 
                        : item)
        },
        decrement(state, action: PayloadAction<number>) {
                state.cartItems = state.cartItems.map((item) => 
                        (item.item_id === action.payload && item.quantity > 1) ? 
                            {...item, quantity: item.quantity - 1} 
                            : item
                )
        },
        deleteCart(state) {
            state.cartItems = [];
        },
        toggleVisibility(state, action: PayloadAction<boolean>) {
            state.viewOnly = action.payload;
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, deleteCart, toggleVisibility } = cartSlice.actions;
