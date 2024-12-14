import buttonSlice from "./buttonSlice";
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
  },
});
export default appStore;
