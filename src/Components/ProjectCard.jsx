import { Link } from "react-router";

const ProjectCard = ({ projects }) => {
  if(projects && projects?.length===0){
    return <div>No projects found</div>
  }

  return (
    <div className="flex sm:items-center sm:justify-center p-1 sm:p-2 ">
      <div className="container   lg:max-w-5xl">
        {projects
          ? projects.map((project) => (
              <Link key={project._id} to={"/project/view/"+project?._id}><div
                
                className="card bg-white  h-45  mt-2 flex shadow-2xl"
              >
                <div className=" p-4 flex  ">
                  <img
                    className="  h-32 w-32 rounded-xl object-cover "
                    src={project?.projectImage}
                  />
                  <div className="ml-8 w-full">
                    <h1 className="text-2xl font-bold">
                      {project?.projectName}
                    </h1>
                    <div className="overflow-hidden text-blue-600 font-bold h-5 md:w-60 lg:w-full" dangerouslySetInnerHTML={{ __html: project?.description }}>
                      
                    </div>
                    <h1 className="mt-5">{project.skills}</h1>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2">
                        <img
                          className=" h-6 w-6 sm:h-12 sm:w-12 object-cover object-top rounded-full mt-2"
                          src={project?.creator?.photoUrl}
                        />
                        <h1>{project?.creator?.firstName}</h1>
                        <h1>{project?.creator?.lastName}</h1>
                      </div>
                      <Link to={"/project/view/"+project?._id}><button className="btn ml-auto hidden sm:block ">View Project</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))
          : Array.from({ length: 3 }).map((index) => <LoadingUi key={index} />)}
      </div>
    </div>
  );
};
export default ProjectCard;

const LoadingUi = () => {
  return (
    <div>
      <div className="skeleton card bg-base-200  h-45 shadow-sm mt-2 flex ">
        <div className=" p-4 flex  ">
          <div className="h-40 w-40 rounded-xl bg-white " />
          <div className="ml-8">
            <h1 className="text-4xl w-64 h-10 bg-white"></h1>
            <p className="overflow-hidden w-32 h-5 mt-1  bg-white "></p>
            <h1 className="mt-5 bg-white rounded-xl w-28 h-5"></h1>
            <div className="flex items-center space-x-2">
              <div className=" h-12 w-12 bg-white object-cover object-top rounded-full mt-2 " />

              <h1 className=" skeleton h-5 bg-white w-32"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
