import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  //userId: null,
};

const userSlice = createSlice({ 
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    //setUser(state, action) {
    //  state.user = action.payload;
    //},
    removeToken(state) {
      state.token = null;
    },
  },
});

export const logIn = createAction("user/login");
export const logOut = createAction("user/logout");
export const signUp = createAction("user/signup");

export default userSlice.reducer;
export const { setToken, removeToken } = userSlice.actions;
