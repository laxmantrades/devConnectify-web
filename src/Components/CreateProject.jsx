import { useState } from "react";

import { useCreateProjectMutation } from "../Features/projectApi";
import {  useNavigate } from "react-router";
import ProjectForm from "./ProjectForm";
const CreateProject = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    projectName: "",
    description: "",
    projectImage: "",
    skills: "",
  });
  // State to hold the editor content
  const handleChange = (eOrContent, isQuill = false) => {
    if (isQuill) {
      setInput((prev) => ({ ...prev, description: eOrContent }));
    } else {
      const { value, name } = eOrContent.target;
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [createPorject, { data, isLoading, isError }] =
    useCreateProjectMutation();
    const handleSubmit = async () => {
      try {
        await createPorject(input);
        navigate("/profile");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    
    <ProjectForm name={"Create Your Project"} button={"Create Project"}  handleSubmit={handleSubmit} handleChange={handleChange} input={input}/>
  );
};
export default CreateProject;
