import { userApi } from "../Features/userApi";


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { projectApi } from "../Features/projectApi";
import { chatApi } from "../Features/chatApi";

const appStore = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware,projectApi.middleware,chatApi.middleware)
});
export default appStore;
const initializeApp = async () => {
  await appStore.dispatch(
    userApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};
initializeApp();
