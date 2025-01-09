
import { useDispatch, useSelector } from "react-redux";

import Editprofile from "./Editprofile";
import Usercard from "./UserCard";

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { hideButton } from "../utils/buttonSlice";
import ProfileCard from "./ProfileCard";
import { hideEditButton } from "../utils/editProfile";

const Profile = () => {
    const userData=useSelector(store=>store?.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(hideButton(false))
        dispatch(hideEditButton(true))
        
       },[dispatch])

    return(
        <div className="flex items-center justify-center ">
            <ProfileCard user={userData}/>
           


        </div>
    )
}

   
export default Profile;
