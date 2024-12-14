import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import Error from "./Error";

function Setting() {
  const [currentPassword, setCurrentPass] = useState("");
  const [newPassword, setNewpass] = useState("");
  const [password, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "profile/password",
        { currentPassword, newPassword, password },
        {
          withCredentials: true,
        }
      );
        setError("")
      alert("Succefully changed password");
    } catch (error) {
        console.log(error);
        
      setError(error.response.data);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-5">
        <div className="card bg-white shadow-2xl  text-black w-96 items-center">
          <h1 className="m-2">CurrentPassword</h1>
          <input
            value={currentPassword}
            type="text"
            placeholder="Current Password"
            className="input input-bordered input-accent w-full  max-w-xs"
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          <h1 className="m-2">New Password</h1>
          <input
            value={newPassword}
            type="text"
            placeholder="New Password"
            className="input input-bordered input-accent w-full  max-w-xs"
            onChange={(e) => setNewpass(e.target.value)}
          />
          <h1 className="m-2">Confirm Password</h1>
          <input
            value={password}
            type="text"
            placeholder="New password"
            className="input input-bordered input-accent w-full  max-w-xs"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="mt-10 mb-2 btn btn-active bg-black text-white"
          >
            Change Password
          </button>
          <h1 className="text-red-600 mb-4">{error}</h1>
        </div>
      </div>
    </div>
  );
}

export default Setting;
