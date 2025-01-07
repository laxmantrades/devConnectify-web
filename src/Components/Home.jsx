import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {

  const[height,setHeight]=useState(window.innerHeight)
 
  useEffect(()=>{
    const updateHeight = () => setHeight(window.innerHeight);

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  },[])
  
  
  return (
    <div className={`bg-neutral-900 w-screen  lg:py-80 sm:py-40 md:px-20 py-32 px-8 `}
    style={{height:`${height}px`}}>
      <div className="md:flex">
        <div className="">
          
         
          <h1 className="sm:hidden hidden md:block lg:block text-4xl md:text-6xl font-bold text-white">Connect</h1>
          <div className=" sm:flex md:flex  md:flex-wrap">
            {" "}
            <h1 className="md:hidden sm:block text-4xl md:text-6xl font-bold text-white mr-2">Connect</h1>
            <h1 className=" text-4xl md:text-6xl font-bold text-white">Collaborate.</h1>
            <h1 className=" text-4xl md:text-6xl font-bold text-blue-500">.Code</h1>
          </div>
          <div className="w-2/3 text-white mt-4 text-lg ">
            <h1>
              Join the community of developers where collaboration meets
              innovation. Build your network, showcase your projects, and grow
              together.{" "}
            </h1>
            <div className="flex mt-10 space-x-2">
              <button className="bg-blue-700 lg:text-xl  px-2  rounded ">
                Get Started
              </button>
              <button className=" border border-blue-600  rounded  md:text-base lg:text-xl p-2">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="text-center flex items-center justify-center  bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg w-2/3 px-32 h-40 md:mt-40">
          <div className=" text-white w-full ">
            <button className=" rounded-full p-4 bg-green-500 w-auto">
              <Code2 strokeWidth={2} />
            </button>
            <h1>Connect with fellow developers</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
