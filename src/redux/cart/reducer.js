import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartItems: [],
    viewOnly: true, 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeFromCart(state, action){
                state.cartItems = state.cartItems.filter((item) => item.item_id !== action.payload)
        },
        addToCart(state, action) {
            const item = action.payload;
            const inCart = state.cartItems.find((item) => item.item_id === action.payload.item_id ? true : false)
            state.cartItems = inCart ? 
                    state.cartItems.map(item => item.item_id === action.payload.item_id ? { ...item, quantity: item.quantity + 1 } : item) :
                    [...state.cartItems, { ...item, quantity: 1 }]     
        },
        increment(state, action) {
            state.cartItems = state.cartItems.map((item) => 
                    (item.item_id === action.payload) ? 
                        {...item, quantity: item.quantity + 1} 
                        : item)
        },
        decrement(state, action) {
                state.cartItems = state.cartItems.map((item) => 
                        (item.item_id === action.payload && item.quantity > 1) ? 
                            {...item, quantity: item.quantity - 1} 
                            : item
                )
        },
        deleteCart(state) {
            state.cartItems = [];
        },
        toggleVisibility(state, action) {
            state.viewOnly = action.payload;
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, deleteCart, toggleVisibility } = cartSlice.actions;
