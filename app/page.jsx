'use client'
import React from "react";
import Frame from "./components/svgs/FrameHome.jsx";
import ModelImage from "./components/svgs/ModelImage.jsx";
import Slogan from "./components/slogan/Slogan.jsx";

export default function Home() {
  return (
    <div className="bg-[#fffbef] min-h-screen flex flex-col md:flex-row items-center justify-center w-full overflow-hidden">
      {/* Slogan arriba en mobile, a la izquierda en desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
        <Slogan />
      </div>
      {/* Imagen al fondo abajo en mobile, a la derecha en desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start z-10">
        {/* Imagen del modelo */}
        <ModelImage />
      </div>
      {/* Frame siempre de fondo */}
      <Frame />
    </div>
  );
}