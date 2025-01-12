import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateProjectMutation } from "../Features/projectApi";
import { useNavigate } from "react-router";
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
    <div className=" flex justify-center items-center mt-10  ">
      <div className="container">
        <div className="  shadow-2xl rounded-md  items-center justify-center p-10">
          <div>
            <h1 className="text-center font-bold text-3xl">
              Create Your Project
            </h1>
            <h1 className=" text-xl mt-5">Project Details</h1>
            <div className=" mt-5">
              <h1>Projcet Name:</h1>
              <input
                value={input.projectName}
                onChange={handleChange}
                name="projectName"
                type="text"
                placeholder="Your Project Name"
                className="border border-red-300 rounded-md shadow-xl mt-1 w-full h-10 px-2"
              ></input>
              <h1 className="mt-10">Project Description:</h1>
              <div className="w-full">
                <ReactQuill
                  name="description"
                  theme="snow"
                  value={input.description}
                  onChange={(Content) => handleChange(Content, true)}
                  className="mt-1 "
                />
              </div>

              <h1 className="mt-5">Project Image:</h1>
              <input
                value={input.projectImage}
                onChange={handleChange}
                name="projectImage"
                placeholder="Image Url"
                type="text"
                className="border border-red-300 rounded-md shadow-xl mt-1 w-full h-10 px-2.5"
              />
              <h1 className="mt-5">Project Skills Required</h1>
              <input
                value={input.skills}
                onChange={handleChange}
                name="skills"
                placeholder="For eg. React JavaScript"
                type="text"
                className="border border-red-300 rounded-md shadow-xl mt-1 w-full h-10 px-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <button onClick={handleSubmit} className="btn btn-primary mt-5">
                Create Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProject;
