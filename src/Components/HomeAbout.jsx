import { BriefcaseBusiness, SquareChevronRight, UsersRound } from "lucide-react";

const HomeAbout = () => {
  return (
    <div className="flex items-center justify-center lg:items-center lg:justify-center ">
      <div className="container">
        <h1 className="text-center text-4xl mt-12 font-bold">
          {" "}
          Powerful Features for Developers
        </h1>
        <h1 className="text-center ">
        Everything you need to connect, collaborate, and grow in the development community
        </h1>
        <div className="md:flex  md:space-x-4 xl:px-36  ">
          <div className="card bg-base-100  md:w-96 shadow-xl ">
            <div className="card-body">
              <UsersRound
                color="#0d5fe3"
                strokeWidth={2}
                className="bg-blue-200 rounded-md w-12 h-12 p-2 "
              />
              <h2 className="card-title">Develop Networking!</h2>
              <p>
                Connect with like-minded developers, share experiences, and
                build meaningful professional relationships.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card bg-base-100 md:w-96 shadow-xl mt-2 ">
            <div className="card-body">
            <SquareChevronRight color="#7c19be" className="bg-blue-200 rounded-md w-12 h-12 p-2 " />
              <h2 className="card-title">Code Collaboration!</h2>
              <p>
                Connect with like-minded developers, share experiences, and
                build meaningful professional relationships.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>{" "}
          <div className="card bg-base-100 md:w-96 shadow-xl mt-1 md:mt-0 ">
            <div className="card-body">
            <BriefcaseBusiness color="#0d5fe3" className="bg-blue-200 rounded-md w-12 h-12 p-2 " />
              <h2 className="card-title">Project Showcase!</h2>
              <p>
                Display your best work and get recognition from the developer
                community.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
