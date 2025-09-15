'use client'
import React from "react";
import Frame from "./components/svgs/FrameHome.jsx";
import ModelImage from "./components/homeImage/ModelImage.jsx";
import Slogan from "./components/slogan/Slogan.jsx";

const mobileImages1 = [
  "/home/img13.jpeg", "/home/img12.jpeg", "/home/img11.jpeg", "/home/img10.jpeg"
];
const mobileImages2 = [
  "/home/img10.jpeg", "/home/img9.jpeg", "/home/img8.jpeg", "/home/img7.jpeg", "/home/img6.jpeg"
];
const mobileImages3 = [
  "/home/img5.jpeg", "/home/img4.jpeg", "/home/img3.jpeg", "/home/img2.jpeg", "/home/img1.jpeg", "/home/img.jpeg"
];

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export default function Home() {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    setIsMobileDevice(isMobile());
    const handleResize = () => setIsMobileDevice(isMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#fffbef] min-h-screen flex flex-col md:flex-row items-center justify-center w-full overflow-hidden">
      {/* Slogan arriba en mobile, a la izquierda en desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
        <Slogan />
      </div>
      {/* Imagenes en mobile: 3 ModelImage, en desktop: 1 ModelImage */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start z-10 gap-2">
        {isMobileDevice ? (
          <>
            <ModelImage images={mobileImages1} />
            <ModelImage images={mobileImages2} />
            <ModelImage images={mobileImages3} />
          </>
        ) : (
          <ModelImage />
        )}
      </div>
      {/* Frame siempre de fondo */}
      <Frame />
    </div>
  );
}