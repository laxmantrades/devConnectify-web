import { useDispatch, useSelector } from "react-redux";
import Usercard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { addFeed } from "../utils/feedSlice";
import { hideButton } from "../utils/buttonSlice";
import { useNavigate } from "react-router";
import { addSearch } from "../utils/searchSlice";

const Feed = () => {
  const userdata = useSelector((store) => store.feed);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchFeed();
    dispatch(hideButton(true));
  }, []);
  const handleClick = () => {
    try {
      
     const result= userdata.filter((user) => user.firstName.toLowerCase().includes(searchInput.toLowerCase()));
      dispatch(addSearch(result))
      navigate("/search");

     
    } catch (error) {
      console.log(error);
      
      navigate("/error");
    }
  };

  if (!userdata) return;
  if (userdata && userdata.length === 0) {
    //return important here
    return (
      <div className="flex items-center justify-center text-2xl text-black">
        No users found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mt-4">
        <h1 className="text-center text-xl font-bold">Search By Name</h1>
        <div className="flex items-center ">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Enter name you want to search"
            className="input input-bordered input-primary w-96"
          />
          <button onClick={handleClick} className="btn btn-primary ml-1">
            Search
          </button>
        </div>
        <Usercard userdata={userdata[0]} />
      </div>
    </div>
  );
};
export default Feed;
