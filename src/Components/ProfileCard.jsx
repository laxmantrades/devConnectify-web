import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router";

const ProfileCard = ({user}) => {
  
  const button=useSelector((store)=>store.editProfileButton)
 
  const{about,firstName,lastName,photoUrl,skills}=user

  return (
    <div className="flex items-center justify-center w-full ">
      <div className=" p-2 container ">
        <div className=" card bg-base-200  w-full h-72  ">
          <div className="bg-purple-600 h-2/3 rounded-md "></div>
          <div className="">
            <img
              className="object-cover object-top absolute top-36  h-20 w-20 rounded-full ml-4  "
              src={photoUrl}
            ></img>
          </div>
          <div className="ml-24  ">
            <div className=" flex justify-between ">
              <div>
                <h1 className="text-xl font-bold">{firstName +""+lastName}</h1>
                <h1>JavaScript</h1>
                </div>
                {button &&<Link to={"edit"} > <button  className="mt-1 font-normal mr-2 btn btn-primary">Edit Profile </button></Link>}
            </div>
            
          </div>
        </div>
        <div className="lg:flex">
          <div>
            <div className="card bg-base-200 w-full lg:w-96 shadow-xl mt-5 lg:mt-10 ml-2 ">
              <div className="card-body">
                <h2 className="card-title">About</h2>
                <p>{about}</p>
              </div>
            </div>
            <div className="card bg-base-200 w-full lg:w-96 shadow-xl mt-5 lg:mt-10 ml-2">
              <div className="card-body">
                <h2 className="card-title text-center">Skills</h2>
                <h1 className="flex space-x-3">
                  {skills}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="card bg-base-200 shadow-xl mt-5 lg:mt-10 ml-4">
              <div className="card-body">
                <h2 className="card-title">Recent Projects</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
