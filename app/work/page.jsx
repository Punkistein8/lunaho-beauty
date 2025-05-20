'use client'
import { useState } from "react";
import FrameWork from "../components/svgs/FrameWork.jsx";

// Lista de imágenes en public/
const images = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
];

const imageSpans = [
    "row-span-2 col-span-2", // imagen 1 grande
    "row-span-2 col-span-1", // imagen 2 alta
    "row-span-1 col-span-1", // imagen 3 pequeña
    "row-span-2 col-span-1", // imagen 4 alta
    "row-span-1 col-span-2", // imagen 5 ancha
    "row-span-1 col-span-1", // imagen 6 pequeña
    "row-span-1 col-span-1", // imagen 7 pequeña
];

export const Work = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const openModal = (idx) => {
        setCurrent(idx);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const prev = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const next = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-[#fffbef] min-h-screen flex flex-col items-center justify-center w-full">
            <FrameWork />

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 z-10 mt-28 w-full max-w-6xl px-4">
                {images.map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt={`work-${idx}`}
                        className={`object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition duration-300 filter grayscale sepia-[0.3] hover:filter-none w-full h-full ${imageSpans[idx % imageSpans.length]}`}
                        onClick={() => openModal(idx)}
                        style={{ aspectRatio: "3/4" }}
                    />
                ))}
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-8 right-8 text-white text-3xl font-bold"
                        onClick={closeModal}
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                    <button
                        className="absolute left-8 text-white text-3xl font-bold"
                        onClick={prev}
                        aria-label="Anterior"
                    >
                        ‹
                    </button>
                    <img
                        src={images[current]}
                        alt={`modal-${current}`}
                        className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-8 text-white text-3xl font-bold"
                        onClick={next}
                        aria-label="Siguiente"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default Work;