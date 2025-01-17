import { useEffect, useState } from "react";

import { useCreateProjectMutation } from "../Features/projectApi";
import { useNavigate } from "react-router";
import ProjectForm from "./ProjectForm";
import { toast } from "sonner";
const CreateProject = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    projectName: "",
    description: "",
    projectImage: "",
    skills: "",
  });
  const [createPorject, { data, isLoading, isError, isSuccess }] =
    useCreateProjectMutation();

  
    useEffect(()=>{
      if(isSuccess){
        toast.success(data?.message||"Successfully created a project")
      }
      if(isError){
        toast.success("Failed to create a project")
      }
    },[isSuccess,isError])
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

  const handleSubmit = async () => {
    try {
      await createPorject(input);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectForm
      name={"Create Your Project"}
      button={"Create Project"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      input={input}
    />
  );
};
export default CreateProject;
