import buttonSlice from "./buttonSlice";
import editProfile from "./editProfile";
import feedSlice from "./feedSlice";
import requestSlice from "./requestSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    request: requestSlice,
    button:buttonSlice,
    search:searchSlice,
    editProfileButton:editProfile
  },
});
export default appStore;
