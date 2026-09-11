'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import FrameWork from "../components/svgs/FrameWork.jsx";

// Imágenes por categoría
const imagesByCategory = {
    no_makeup_look: [
        "/no_makeup_look_1.jpeg",
        "/no_makeup_look_2.jpeg",
        "/no_makeup_look_3.jpeg",
        "/no_makeup_look_6.jpeg",
        "/no_makeup_look_7.jpeg",
        "/no_makeup_look_8.jpeg",
        "/no_makeup_look_9.jpeg",
        "/no_makeup_look_10.jpeg",
        "/no_makeup_look_11.jpeg",

    ],
    bridal: [
        "/weeding_1.jpeg",
        "/weeding_2.jpeg",
        "/weeding_3.jpeg",
        "/weeding_4.jpg",
        "/weeding_5.jpg",
        "/home/img14.jpeg",
        "/weeding_6.jpg",
        "/weeding_7.jpeg",
        "/weeding_8.jpeg",
        "/weeding_9.jpeg",
        "/weeding_10.jpeg",
        "/weeding_11.jpeg",
        "/weeding_12.jpeg",
        "/weeding_13.jpeg"
    ],
    social_makeup: [
        "/social_1.jpeg",
        "/social_2.jpeg",
        "/social_3.jpeg",
        "/social_4.jpeg",
        "/social_5.jpeg",
        "/social_6.jpg",
        "/social_7.jpg",
        "/social_8.jpg",
        "/social_9.jpeg",
        "/social_10.jpg",
        "/social_11.jpg"
    ],
    fx_makeup: [
        "/fx_makeup_8.jpg",
        "/fx_makeup_3.jpeg",
        "/fx_makeup_2.jpeg",
        "/fx_makeup_1.jpeg",
        "/fx_makeup_4.jpeg",
        "/fx_makeup_5.jpeg",
        "/fx_makeup_7.jpg",
        "/fx_makeup_6.jpeg",
    ],
    all: [
        "/img1.jpeg",
        "/img2.jpeg",
        "/img3.jpeg",
        "/img4.png",
        "/img5.png",
        "/img6.png",
        "/img7.png",
    ],
    editorial: [
        "/editorial_1.jpg",
        "/editorial_2.jpg",
        "/editorial_3.jpg",
        "/editorial_4.jpg",
        "/editorial_5.jpg",
        "/editorial_6.jpg",
        "/editorial_7.jpg",
    ]
};

const imageSpans = [
    "row-span-2 col-span-2",
    "row-span-2 col-span-1",
    "row-span-1 col-span-1",
    "row-span-2 col-span-1",
    "row-span-1 col-span-2",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1",
];

export default function Work() {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const searchParams = useSearchParams();
    const cat = searchParams.get("cat");

    // Selecciona imágenes según la categoría, o todas si no hay categoría
    const images = imagesByCategory[cat] || imagesByCategory.all;

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
        <div className="bg-[#fffbef] min-h-screen flex flex-col items-center justify-center w-full my-20">
            <FrameWork />

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 z-10 grid-flow-dense mt-28 w-full max-w-6xl px-4">
                {images.map((src, idx) => (
                    <img
                        key={src + idx}
                        src={src}
                        alt={`work-${idx}`}
                        className={`object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition duration-300  w-full h-full ${imageSpans[idx % imageSpans.length]}`}
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
}