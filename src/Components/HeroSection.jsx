import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useWindowHeight from "../utils/useWindowheight";

const HeroSection = () => {
 const height=useWindowHeight()
  return (
    <div
      className={`bg-neutral-900 lg:py-80 sm:py-40 md:px-20 py-32 px-8 `}
      style={{ height: `${height}px` }}
    >
      <div className="container mx-auto max-w-6xl ">
        <div className="md:flex">
          <div className="text-center md:text-left lg:text-left">
            <h1 className="sm:hidden hidden md:block lg:block text-4xl md:text-6xl font-bold text-white">
              Connect
            </h1>
            <div className=" md:flex items-center  sm:justify-center md:items-start md:justify-start md:flex-wrap">
              <h1 className="block md:hidden  text-5xl md:text-6xl font-bold text-white mr-2">
                Connect
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Collaborate.
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-500">
                .Code
              </h1>
            </div>
            <div className="md:w-2/3 text-white mt-4 text-lg">
              <h1>
                Join the community of developers where collaboration meets
                innovation. Build your network, showcase your projects, and grow
                together.
              </h1>
              <div className="flex items-center  mt-10 space-x-2">
                <button className="bg-blue-700 lg:text-xl p-2 rounded">
                  Get Started
                </button>
                <button className="border border-blue-600 rounded md:text-base lg:text-xl p-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="text-center flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg max-w-7xl px-32 h-40 md:mt-40 lg:mt-20">
            <div className="text-white">
              <button className="rounded-full p-4 bg-green-500">
                <Code2 strokeWidth={2} />
              </button>
              <h1>Connect with fellow developers</h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 text-xl mt-10">
          <h1 className="text-white">Don't have account?</h1> 
          <h1 className="text-white underline"><Link to="/login">Create a account</Link></h1>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
