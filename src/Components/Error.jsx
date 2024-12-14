import { Link } from "react-router";

const Error = ({ error }) => {
  return (
    <div className="bg-gray-800">
    <div className="flex items-center justify-center h-screen  text-white ">
      <div className="w-1/4">
        <h1 className="text-4xl font-bold ">404</h1>
        <h1 className="text-xl ">
          I'm afraid you've found a page that doesn't exist on CodePen. That can
          happen when you follow a link to something that has since been
          deleted. Or the link was incorrect to begin with.
         
        </h1>
        <h1 className="text-xl">
            Sorry about that. We've logged the error for review, in case it's
            our fault.
          </h1>
        <Link to={"/feed"}><button className="btn items-center text-xl ">Go to HomePage</button></Link>
        
      </div>
    </div>
    </div>
  );
};
export default Error;
