import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    
    removeFeed: (state, action) => {
        const newArr=state.filter((res)=>res._id!==action.payload) //this will not show the id which we clicked on
        return newArr
    },
    removeALLFeed:(state,action)=>{ return null}
  },
});

export const { addFeed, removeFeed,removeALLFeed,showButtons} = feedSlice.actions;
export default feedSlice.reducer;
