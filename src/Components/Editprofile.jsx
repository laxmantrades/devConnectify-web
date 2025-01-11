import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import Usercard from "./UserCard";
import { hideButton } from "../utils/buttonSlice";

function Editprofile() {
  const userdata=useSelector((store)=>store?.auth.user)
  const emailId = userdata?.emailId || "";
  const [firstName, setfirstName] = useState(userdata?.firstName || "");
  const [lastName, setLastName] = useState(userdata?.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(userdata?.photoUrl || "");
  const [skills, setSkill] = useState(userdata?.skills || "");
  const [about, setAbout] = useState(userdata?.about || "");
  const [error, setError] = useState("");
  const [showtoast, setShowtoast] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          about,
          skills,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      setShowtoast(true);
      const i = setTimeout(() => {
        setShowtoast(false);
      }, 2000);
    } catch (err) {
     
     setError(err?.response?.data?.error[0])
     
    }
  };
  

  return (
    <div>
      <div className="md:flex lg:flex items-center justify-center mt-4 ">
        <div className="card bg-neutral  w-96 ">
          <div className="card-body">
            <div>
              {" "}
              <h1 className="text-primary-content">First Name</h1>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  className="grow"
                  placeholder="First Name"
                />
              </label>
             
              <h1 className="text-primary-content">Last Name</h1>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="grow"
                  placeholder="Second Name"
                />
              </label>
            </div>

            <h1 className="text-primary-content">Email Id</h1>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                value={emailId}
                disabled
                className="grow"
                placeholder="Email"
              />
            </label>
            <h1 className="text-primary-content">Photo URl</h1>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <input
                type=""
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="grow"
              />
            </label>
            <h1 className="text-primary-content">Skills</h1>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkill(e.target.value)}
                className="grow"
              />
            </label>
            <h1 className="text-primary-content">About Me</h1>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="textarea textarea-info"
              placeholder="Bio"
            ></textarea>

            <p className="text-red-500">{error}</p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleClick}
                className="text-white text-center shadow-xl rounded-md bg-blue-600 p-2 font-bold text-xl"
              >
                Save Profile
              </button>
              
            </div>
            
          </div>
        </div>
        <div className="md:m-4 lg:m-4">
          {" "}
          <Usercard
            userdata={{ firstName, lastName, about, skills, photoUrl }}
          />
        </div>
      </div>
      {showtoast && (
        <div role="alert" className="alert alert-success mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your profile is succefully updated!</span>
        </div>
      )}
    </div>
  );
}
export default Editprofile;
