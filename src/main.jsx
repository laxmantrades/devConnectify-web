import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import appStore from "./utils/appStore.js";
import "./index.css";
import App from "./App.jsx";
import { Provider, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./utils/constants.js";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";
import { addUser } from "./utils/userSlice.js";
import { useLoadUserQuery } from "./Features/userApi.js";
const Custom = ({ children }) => {
  
    const {isLoading}=useLoadUserQuery()

  return (
    <>
     { isLoading?
     <LoadingSpinner />: <>{children}</>}
    </>
  );
};
createRoot(document.getElementById("root")).render(
  
    <Provider store={appStore}>
      <Custom>
      <App />
      </Custom>
    </Provider>

);
