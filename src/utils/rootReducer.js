import { combineReducers } from "@reduxjs/toolkit";
import { userApi } from "../Features/userApi";
import authReducer from "../utils/userSlice"
import feedReducer from "../utils/feedSlice"
import buttonSlice from "./buttonSlice";
import requestSlice from "./requestSlice";
import searchSlice from "./searchSlice";
import editProfile from "./editProfile";
import { projectApi } from "../Features/projectApi";

const rootReducer=combineReducers({
    [userApi.reducerPath]:userApi.reducer,
    auth:authReducer,
    feed:feedReducer,
    request: requestSlice,
    button:buttonSlice,
    search:searchSlice,
    editProfileButton:editProfile,
    [projectApi.reducerPath]:projectApi.reducer
    
})
export default rootReducer