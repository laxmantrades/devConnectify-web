import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Connection = () => {
  const [connection, setConnection] = useState(null);
  const navigate=useNavigate()
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
  }, []);
  if (!connection) return;
  if (connection.length === 0) {
    <div className="flex items-center justify-center">
      <h1>No connection found</h1>
    </div>;
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="md:w-2/3 lg:w-2/3">
        <h1 className="m-4 text-center text-3xl">Connection Lists</h1>
        {connection &&
          connection?.map((user) => {
            const { firstName, lastName, photoUrl, about } = user;
            return (
              <Link to={`/profile/${user._id}`}><div key={user._id} className="flex  m-4 p-2 h-26  bg-slate-600 rounded-lg shadow-2xl">
                <div className="">
                  <img
                    className="w-28 h-28  mx-2 rounded-full object-cover "
                    src={photoUrl}
                  ></img>
                </div>
                <div>
                  <h1 className="text-2xl text-white">
                    {firstName + " " + lastName}
                  </h1>
                  <h1 className="text-white">{about}</h1>
                </div>
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Connection;
