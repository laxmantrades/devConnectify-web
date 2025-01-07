import { Outlet, useNavigate } from "react-router";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
 
 
  return (
    <>
      <Navbar />
      <Outlet />
     <Footer/>
    </>
  );
};
export default Body;
