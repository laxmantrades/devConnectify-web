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
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(
        BASE_URL + "profile/view",

        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      
    } catch (err) {
      //if (err.status === 400) {
      navigate("/login");
      // }

     
    }
  };
  useEffect(() => {
    if(!userData){
    fetchUser();}
  }, [userData]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
