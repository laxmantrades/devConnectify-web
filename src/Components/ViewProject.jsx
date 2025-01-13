import { useParams } from "react-router";
import { useFetchProjectQuery } from "../Features/projectApi";

const ViewProject = () => {
  const params = useParams();
  const { projectId } = params;

  const { data, isLoading, isError } = useFetchProjectQuery(projectId);
  if (!data) return;
  const { skills, projectName, description, photoUrl, creator, projectImage } =
    data?.project;
  return (
    <div className="flex sm:items-center sm:justify-center mt-2 ">
      <div className=" container md:w-2/3 ">
        <div className="bg-white sm:shadow-lg p-4 rounded-xl">
          <div>
            <div className="flex">
            <h1 className="w-full font-bold text-3xl">{projectName}</h1>
            <button className="btn btn-primary">Edit Button</button>
            </div>
            
           
            <div>
              <div className="flex items-center space-x-2">
                <img
                  className="h-12 w-12 object-cover object-top rounded-full mt-2"
                  src={creator?.photoUrl}
                />
                <h1>{creator?.firstName}</h1>
                <h1>{creator?.lastName}</h1>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold mt-4 ">Technology Used</h1>
              <h1 className="p-2">{skills} </h1>
            </div>
            <div className="mt-5">
              <img
                src={
                  projectImage ||
                  "https://trekmag.co.uk/wp-content/uploads/What-is-a-Project-1-scaled-1.jpg"
                }
              />
            </div>
            <div>
              <h1 className="text-2xl mt-4 ">Project Description</h1>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProject;
