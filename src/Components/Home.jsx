const Home = () => {
  return (
    <div className="bg-neutral-900 w-auto  p-40 py-80 ">
      <div className="flex  ">
        <div>
          <h1 className="md:text-6xl font-bold text-white">Connect</h1>
          <div className="flex flex-wrap">
            {" "}
            <h1 className="md:text-6xl font-bold text-white">Collaborate.</h1>
            <h1 className="md:text-6xl font-bold text-blue-500">.Code</h1>
          </div>
          <div className="w-1/2 text-white ">
            <h1 >
              Join the community of developers where collaboration meets
              innovation. Build your network, showcase your projects, and grow
              together.{" "}
            </h1>
          </div>
        </div>
        <div class="text-center flex items-center  inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg">
        <div className=" text-white  ">
            <h1 className="">{"</>"}</h1>
            <h1>Connect with fellow developers</h1>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
