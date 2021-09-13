import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { UserCredentials } from "../types";

interface UserState {
  token: string,
};

const initialState = {
  token: ""
} as UserState;

const userSlice = createSlice({ 
  name: "user",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    //setUser(state, action) {
    //  state.user = action.payload;
    //},
    removeToken(state) {
      state.token = "";
    },
  },
});

export const signUp = createAction<UserCredentials>("user/signup");
export const logIn = createAction<UserCredentials>("user/login");
export const logOut = createAction<void>("user/logout");

export default userSlice.reducer;
export const { setToken, removeToken } = userSlice.actions;
