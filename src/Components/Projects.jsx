import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useLoadnetworkprojectQuery } from "../Features/projectApi";

const Project = () => {
  const [projects, setProjects] = useState("");
  const [allProjects, setallProjects] = useState(true);
  const [networkproject, setNetworkProject] = useState(false);
  const { data } = useLoadnetworkprojectQuery();

  const fetchProjects = async () => {
    try {
      const res = await axios.get(BASE_URL + "projects", {
        withCredentials: true,
      });
      setProjects(res?.data?.project);
    } catch (error) {
      console.log(error);
    }
  };
  const handleallProjects = () => {
    if (allProjects === true) {
      setallProjects(true);
    } else {
      setallProjects(!allProjects);
      setNetworkProject(!networkproject);
    }
  };
  const handlenetworkprojects = () => {
    if (networkproject === true) {
      setNetworkProject(true);
    } else {
      setallProjects(!allProjects);
      setNetworkProject(!networkproject);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="bg-gray-100 h-screen ">
      <div className="pt-4">
        <div className="flex   justify-between sm:justify-center sm:space-x-7 text-xl ">
          <h1
            onClick={handleallProjects}
            className={`text-center mx-auto sm:mx-0 ${
              allProjects && "border-b-2"
            } border-black cursor-pointer hover:scale-105`}
          >
            All Projects
          </h1>
          <h1
            onClick={handlenetworkprojects}
            className={`text-center mx-auto sm:mx-0 ${
              networkproject && "border-b-2"
            } border-black cursor-pointer`}
          >
            Network Projects
          </h1>
        </div>

        {allProjects && <ProjectCard projects={projects} />}
        {networkproject &&
          (data && data?.project?.length > 0 ? (
            <ProjectCard projects={data?.project} />
          ) : (
            <h1 className="flex items-center justify-center mt-10 text-2xl text-center">
              No projects Found because you have not established connection with
              anyone
            </h1>
          ))}
      </div>
    </div>
  );
};
export default Project;
