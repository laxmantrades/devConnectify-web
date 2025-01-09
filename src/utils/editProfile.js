import { createSlice } from "@reduxjs/toolkit";

const editProfile = createSlice({
  name: "editProfileButton",
  initialState:false,
  reducers: {
    hideEditButton: (state, action) => {
       return action.payload
    }, //todo
  },
});
export const { hideEditButton } = editProfile.actions;
export default editProfile.reducer;