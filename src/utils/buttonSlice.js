import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState:false,
  reducers: {
    hideButton: (state, action) => {
       return action.payload
    }, //todo
  },
});
export const { hideButton } = buttonSlice.actions;
export default buttonSlice.reducer;
