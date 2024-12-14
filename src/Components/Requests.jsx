import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useNavigate } from "react-router";

const Requests = () => {
  const dispatch = useDispatch();
  const requestdata = useSelector((store) => store.request);
  const navigate=useNavigate()
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/request/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      navigate("/error")
      
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (requestdata && requestdata.length === 0) {
    return (
      <div className="flex items-center justify-center text-3xl mt-40">
        You have no requests yet!
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-center text-3xl mt-20"> Connection Requests</h1>
      {requestdata?.map((user) => (
        <RequestCard key={user._id} user={user} />
      ))}
    </div>
  );
};
export default Requests;
