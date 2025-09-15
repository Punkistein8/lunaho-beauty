'use client'
import FrameAbout from "../components/svgs/FrameAbout.jsx";
import aboutPhoto from "../../public/about-photo2.jpeg";
import Image from "next/image";
import { Tenor_Sans } from "next/font/google";

const tenorSans = Tenor_Sans({
    subsets: ["latin"],
    weight: "400",
});

export default function About() {
    return (
        <div className="bg-[#fffbef] flex items-center justify-center overflow-hidden mt-44">
            <FrameAbout />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 py-20 gap-8 md:gap-16">
                {/* Texto */}
                <div className={`bg-[#e6beae]/70 rounded-xl p-8 md:p-10 shadow-lg max-w-xl w-full text-justify ${tenorSans.className}`}>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">Nahomy Granja</h1>
                    <p className="text-base md:text-lg text-black mb-4">
                        My name is Nahomy Granja, a passionate and dedicated Ecuadorian makeup artist. With three years of experience, I specialize in special effects makeup, but I also truly enjoy working with brides to enhance their natural beauty on their special day. Based in New York and available to travel to New Jersey, I offer personalized and professional services designed to make every client feel unique, pampered, and truly special.                    </p>
                    {/* <p className="text-base md:text-lg text-black">
                        Aside from my work as an artist, I am also half of I can’t afford this but maybe she can, a curating project for all things bold and beautiful.
                    </p> */}
                </div>
                {/* Imagen */}
                <div className="w-full max-w-lg md:max-w-xl aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        src={aboutPhoto}
                        alt="Nahomy Granja"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}