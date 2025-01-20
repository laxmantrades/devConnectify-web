import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { hideEditButton } from "../utils/editProfile";

const Connection = () => {
  const [connection, setConnection] = useState(null);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/connections", {
        withCredentials: true,
      });
      setConnection(res?.data?.data);
    } catch (error) {
      //todo error page
      navigate("/error")
    }
  };
  useEffect(() => {
    fetchConnection();
    dispatch(hideEditButton(false))
  }, []);
  if (!connection) return;
  if (connection.length === 0) {
    <div className="flex items-center justify-center">
      <h1>No connection found</h1>
    </div>;
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="md:w-2/3 lg:w-2/3 max-w-5xl">
        <h1 className="m-4 text-center text-3xl">Connection Lists</h1>
        {connection &&
          connection?.map((user) => {
            const { firstName, lastName, photoUrl, about,_id } = user;
            return (
              <div key={user._id} ><div  className="flex justify-between  m-4 p-2 h-26  bg-slate-600 rounded-lg shadow-2xl">
              
                <Link to={`/profile/${user._id}`}><div className="flex space-x-2">
                  <img
                    className="object-top w-14 h-14 sm:w-28 sm:h-28  mx-2 rounded-full object-cover max-w-none "
                    src={photoUrl}
                  ></img>
                  <div className="">
                  <h1 className="text-2xl text-white ">
                    {firstName + " " + lastName}
                  </h1>
                  <h1 className="text-white">{about}</h1>
                </div>
                </div>
                </Link>
                
                
                <div className="flex justify-end">
                
                <button onClick={()=>navigate(`/chat/${_id}`)} className= "  text-xl btn btn-primary">Chat</button>
                
                </div>
                
              </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Connection;
