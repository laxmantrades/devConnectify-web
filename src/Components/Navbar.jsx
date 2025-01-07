import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { removeALLFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const Navbar = () => {
  const user = useSelector((store) => store?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    if (user) return;
 
    
      const res = await axios.get(
        BASE_URL + "profile/view",

        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      
  
  };
  useEffect(() => {
    
    fetchUser();
  }, []);
  const handleSignOut = async () => {
   
      const res = await axios.post(
        BASE_URL + "signout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/login");
      dispatch(removeUser());
      dispatch(removeALLFeed());
   
  };

  return (
    <div>
      <div className="navbar bg-blue-400">
        <div className="flex-1">
          <Link to={"/feed"}>
            {" "}
            <h1 className="btn btn-ghost text-2xl font-bold">
              devConnectify.com
            </h1>
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div>{"Welcome " + user?.firstName}</div>
            <div className="dropdown dropdown-end mr-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoUrl}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"}>
                    <h1 className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link to={"/connection"}>Connections</Link>
                </li>
                <li>
                  <Link to={"/requests"}>Requests</Link>
                </li>
                <li>
                  <Link to={"/setting"}>Settings</Link>
                </li>
                <li onClick={handleSignOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
