
import { useDispatch, useSelector } from "react-redux";

import Editprofile from "./Editprofile";
import Usercard from "./UserCard";

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { hideButton } from "../utils/buttonSlice";

const Profile = () => {
    const userData=useSelector(store=>store?.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(hideButton(false))
        
        
       },[dispatch])

    return(
        <div className="flex items-center justify-center ">
            <Editprofile userdata={userData}/>
           


        </div>
    )
}

   
export default Profile;
