'use client'
import React from "react";
import Frame from "./components/svgs/FrameHome.jsx";
import ModelImage from "./components/svgs/ModelImage.jsx";
import Slogan from "./components/slogan/Slogan.jsx";

export const Home = () => {
  return (
    <div className="bg-[#fffbef] flex flex-row justify-center w-full">
    
            <Slogan />

            <Frame />

            <ModelImage />

    </div>
  );
};

export default Home;