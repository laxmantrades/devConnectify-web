import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:null,
    reducers:{
        addSearch:(state,action)=>action.payload
    }
})
export const {addSearch}=searchSlice.actions
export default searchSlice.reducer