const ProjectCard = ({ projects }) => {
  console.log(projects);

  return (
    <div className="flex items-center justify-center p-2">
      <div className="container md:w-2/3 lg:max-w-5xl">
       
          {projects &&
            projects.map((project) => (
                <div key={project._id} className="card bg-base-200  h-45 shadow-sm mt-2 flex ">
              <div className=" p-4 flex  ">
                <img
                  className="h-40 w-40 rounded-xl  "
                  src="https://www.figma.com/community/resource/106a8513-8e2c-4f21-bd59-406f968778d8/thumbnail"
                />
                <div className="ml-8">
                  <h1 className="text-4xl">{project?.projectName}</h1>
                  <p className="overflow-hidden">
                    {project?.description}
                  </p>
                  <h1 className="mt-5">{project.skills}</h1>
                  <div className="flex items-center space-x-2">
                    <img
                      className=" h-12 w-12 object-cover object-top rounded-full mt-2 "
                      src={project?.creator?.photoUrl}
                    />
                    
                      <h1>{project?.creator?.firstName}</h1>
                      <h1>{project?.creator?.lastName} </h1>
                    
                  </div>
                </div>
              </div>
              </div>
            ))}
        
      </div>
    </div>
  );
};
export default ProjectCard;
