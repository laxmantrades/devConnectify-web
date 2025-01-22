import { useDispatch, useSelector } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { hideButton } from "../utils/buttonSlice";
import { useNavigate } from "react-router";

const Usercard = ({ userdata }) => {
  const { photoUrl, lastName, firstName, about, skills, _id } = userdata;
  const button = useSelector((store) => store.button);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleClick = async (status) => {
    try {
      await axios.post(
        BASE_URL + "request/" + status + "/" + _id,
        {},

        {
          withCredentials: true,
        }
      );

      dispatch(removeFeed(_id));
    } catch (err) {
      console.log(err);
      
      navigate("/error")
    }
  };

  return (
    <div className="flex items-center justify-center mt-6 ">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="h-50" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex">
            <h1 className=" text-2xl mx-2 ">{firstName}</h1>
            <h1 className=" text-2xl ">{lastName}</h1>
          </div>
          <h1 className=" text-xl">{about}</h1>
          <h1 className=" text-xl">{skills}</h1>

          {button && (
            <div className="flex justify-around">
              <button
                onClick={() => handleClick("interested")}
                className="btn w-24 btn-active btn-secondary"
              >
                Interested
              </button>
              <button
                onClick={() => handleClick("ignored")}
                className="btn w-24 btn-active btn-primary"
              >
                Ignore
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Usercard;
