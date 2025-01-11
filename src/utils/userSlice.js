import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated:false,
    user:null
  },
  reducers: {
    addUser: (state, action) => {
      state.user=action.payload
      state.authenticated=true
     
    },
    removeUser: (state, action) => {
      state.user= null;
      state.authenticated=false
      
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
