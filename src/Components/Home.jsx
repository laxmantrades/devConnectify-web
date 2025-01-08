import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import HomeAbout from "./HomeAbout";
import HeroSection from "./HeroSection";

const Home = () => {


  return (
    <div>
      <HeroSection />
      <HomeAbout/>
    </div>
  );
};
export default Home;
