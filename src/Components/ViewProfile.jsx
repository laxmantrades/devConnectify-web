import { View } from "lucide-react";
import Usercard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const ViewProfile = () => {
  const [user, setUser] = useState("");
  const params = useParams();

  const { userId } = params;
 

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + `profile/${userId}`, {
        withCredentials: true,
      });
      setUser(res?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ProfileCard user={user}/>
    </div>
  );
};
export default ViewProfile;
