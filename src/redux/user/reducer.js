import { createSlice } from "@reduxjs/toolkit";

const initialState = {
// ADD INITIAL STATE HERE 
// Tentative
//   token: null,
//   user: null,
};

const userSlice = createSlice({ 
  name: "user",
  initialState,
// Tentative r
//   reducers: {
//     setToken(state, action) {
//       state.token = action.payload;
//     },
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     signOut(state) {
//       state.user = null;
//       state.token = null;
//     },
//   },
});

export default userSlice.reducer;
// export const { setToken, setUser, signOut } = userSlice.actions;

