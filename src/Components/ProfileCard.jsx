import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router";
import ProjectCard from "./ProjectCard";
import { useLoadPersonalProjectsQuery } from "../Features/projectApi";

const ProfileCard = ({user}) => {
  const {userId}=useParams()
  const button=useSelector((store)=>store.editProfileButton)
  const loggedinUser=useSelector((store)=>store?.auth.user?._id)
  const {data,isError}=useLoadPersonalProjectsQuery(userId?userId:"")
  console.log(user);
  
  
  
  
  
  
  
 
  
  
 
  const{about,firstName,lastName,photoUrl,skills,_id}=user

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
            <div className=" flex justify-between ml-2">
              <div>
                <h1 className="text-xl font-bold ">{firstName +""+lastName}</h1>
                <h1>{skills}</h1>
                <div className="Font-bold text-xl mt-4">
                  <h1>About:</h1>
                  {about}
                  </div>
                </div>
                {button &&<Link to={"edit"} > <button  className="mt-1 font-normal mr-2 btn btn-primary">Edit Profile </button></Link>}
            </div>
            

            
          </div>
        </div>
        <div className="lg:flex">
        <div className="w-full">
            <div className="card bg-base-200 shadow-xl mt-5 lg:mt-10 md:ml-4">
              <div className="sm:card-body p-1 sm:p-4">
                <div className="flex justify-between">
                <h2 className="card-title">{firstName} Projects</h2>
                {_id===loggedinUser&&<Link to={"/create-project"}><button  className="btn btn-primary">Create a Project</button></Link>}
                </div>
                
                <ProjectCard projects={data?.project}/>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
