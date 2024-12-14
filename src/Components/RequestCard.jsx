import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";
import { useNavigate } from "react-router";

const RequestCard = ({ user }) => {
  const dispatch = useDispatch();
  const { photoUrl, firstName, lastName, about } = user.fromUserID;
  const [showtoast, setShowtoast] = useState(false);
  const navigate=useNavigate()
  const handleRequest = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/review/" + status + "/" + user?._id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(user?._id));
      setShowtoast(true);
      setTimeout((status) => {
        setShowtoast(false);
      }, 2500);
    } catch (err) {
      navigate("/error")
    }
  };

  return (
    
      
        <div className="flex items-center justify-center mt-2">
          <div className="p-2 bg-neutral    lg:w-2/5 flex items-center rounded-xl justify-around">
            <img className="w-20 ml-4 mr-4 rounded-full" src={photoUrl}></img>
            <div className="mt-2">
              <h1 className="text-white text-xl">
                {firstName + " " + lastName}
              </h1>
              <h1 className="text-white">{about}</h1>
            </div>
            <div className="text-center items-center justify-center flex ">
              <button
                onClick={() => handleRequest("accepted")}
                className=" mx-2 btn btn-primary"
              >
                Accept
              </button>
              <button
                onClick={() => handleRequest("rejected")}
                className="  btn btn-secondary"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
     
    
  );
};
export default RequestCard;
