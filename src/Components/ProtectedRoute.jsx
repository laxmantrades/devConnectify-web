import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import Home from "./Home";
import Login from "./Login";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.auth.user);
  const authenticated=useSelector((store)=>store.auth.authenticated)
  
  // Once resolved, decide whether to show children or redirect
  return user &&authenticated ? children : <Navigate to="/" />;
   
  
};
export const ConditionalHomePage = () => {
  const user = useSelector((store) => store.auth.user);
  return user ? <Navigate to={"/feed"} /> : <Home />;
};
export const ConditionalLogin = () => {
  const user = useSelector((store) => store.auth.user);
  return user ? <Navigate to={"/feed"} /> : <Login />;
};
