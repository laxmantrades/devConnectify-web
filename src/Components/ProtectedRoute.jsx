import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Home from "./Home";
import Login from "./Login";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
   // return user?children : <Navigate to={"/"} />;
  if (!user) {
    <Navigate to={"/"} />;
  } else {
    return children;
  }
};
export const ConditionalHomePage = () => {
  const user = useSelector((store) => store.user);
  return user ? <Navigate to={"/feed"} /> : <Home />;
};
export const ConditionalLogin = () => {
  const user = useSelector((store) => store.user);
  return user ? <Navigate to={"/feed"} /> : <Login />;
};
