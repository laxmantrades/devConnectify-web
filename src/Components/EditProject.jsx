import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import { useEditProjectMutation, useFetchProjectQuery } from "../Features/projectApi";
import { useNavigate, useParams } from "react-router";

import { toast } from "sonner";

const EditProject=()=>{
    
    const{projectId}=useParams()
    const navigate=useNavigate()
   
    
    const {data,isLoading}=useFetchProjectQuery(projectId)
  
    const [editProject,{isSuccess}]=useEditProjectMutation()
    const {projectName,projectImage,description,skills}=data && data?.project||{}
  
  
    useEffect(()=>{
      if (isSuccess) {
        toast.success("Edited Project Successfully")
        
      }
    },[isSuccess])
    const [input, setInput] = useState({
        projectName: projectName|| "",
        description: description||"",
        projectImage: projectImage||"",
        skills: skills||"",
      });
      useEffect(() => {
        // Sync fetched project data with form state on successful fetch
        if (data) {
          setInput({
            projectName: projectName || "",
            description: description || "",
            projectImage: projectImage || "",
            skills: skills || [],
          });
        }
      }, [data]);
      if(!data) return
    if(isLoading) return <div>Loading...</div>
   
    
    
   
    console.log(isSuccess);
    
    
    
    

  
      // State to hold the editor content
  const handleChange = (eOrContent, isQuill = false) => {
    if (isQuill) {
      setInput((prev) => ({ ...prev, description: eOrContent }));
    } else {
      const { value, name } = eOrContent.target;
      setInput((prev) => ({ ...prev, [name]: value }));
    }


    
  };

  const handleSubmit=async ()=>{
    try {
       await  editProject({input,projectId})
       await navigate(`/project/view/${projectId}`)
    } catch (error) {
        console.log(error);
        
    }
   }
    return(
        <div>
            <ProjectForm name={"Edit Project"} button={"Save Project"} input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}
export default EditProject