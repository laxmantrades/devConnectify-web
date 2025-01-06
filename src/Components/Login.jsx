import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("virat@gmail.com");
  const [signUp, setSignup] = useState(false);
  const [password, setPassword] = useState("ViratKohli@123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingUP = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        { firstName, lastName, emailId, password },
        {
          withCredentials: true,
        }
      );
     


      dispatch(addUser(res?.data?.data?.savedUser));

      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data);
      
   
      
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/feed");
      dispatch(addUser(res.data));
    } catch (error) {
      setError(error?.response?.data);
      
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="card border  shadow-2xl text-black  w-96 ">
        <div className="card-body">
          {signUp && (
            <div>
              {" "}
              <h1 className="">FirstName</h1>
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
                  onChange={(e) => setFirstName(e.target.value)}
                  className="grow"
                  placeholder="First Name"
                />
              </label>
              <h1 className="">Last Name</h1>
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
          )}
          <h1 className="">Email Id</h1>
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
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => setError("")}
              className="grow"
              placeholder="Email"
            />
          </label>

          <h1 className="">Password</h1>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => setError("")}
              className="grow"
            />
          </label>
          <div className="  pt-5 text-black text-3xl  flex items-center justify-center">
            <button
              onClick={signUp ? handleSingUP : handleClick}
              className=" p-2 bg-blue-600 text-white w-40 rounded-lg text-4xl font-bold"
            >
              {signUp ? " SignUp" : "Login"}
            </button>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="flex items-center justify-center">
            <h1 className=" text-center">
              {" "}
              {signUp ? "Already have a account?" : "Don't have account ?"}
            </h1>
            <h1
              onClick={() => {
                setSignup(!signUp);
                setEmail("");
                setPassword("");
                setError("");
                ;
              }}
              className=" text-center mx-4 cursor-pointer underline"
            >
              {signUp ? "Login" : "SingUP"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
