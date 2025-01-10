import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import { BASE_URL } from "../utils/constants"
import axios from "axios"

const Project=()=>{
    const [projects,setProjects]=useState("")
    const fetchProjects=async()=>{
        try {
            const res=await axios.get(BASE_URL+"projects",{withCredentials:true})
            setProjects(res?.data?.project)
        } catch (error) {
            console.log(error);
            
        }

    }
    
    useEffect(()=>{
        fetchProjects()
    },[])
    return(
        <div>
            <ProjectCard projects={projects}/>
        </div>
    )
}
export default Project