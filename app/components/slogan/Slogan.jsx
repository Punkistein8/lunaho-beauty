'use client'
import { Playwrite_AU_QLD } from "next/font/google";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const playwrite = Playwrite_AU_QLD({
    subsets: ["cyrillic"],
    weight: "400",
});

// Lista de frases con saltos de línea usando \n
const phrases = [
    "Beauty...\nelevated to art",
    "Inspiring\nyour confidence",
    "Makeup is\nmagic",
    "Unleash\nyour beauty",
];

const INTERVAL = 5000; // ms

const Slogan = () => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setShow(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % phrases.length);
                setShow(true);
            }, 400); // Duración de la animación de salida
        }, INTERVAL);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className={`absolute top-22 md:top-[260px] right-5 md:left-20 font-bold text-right md:text-left text-black text-[30px] md:text-[70px] lg:text-[135px] leading-[normal] transition-all duration-500 ${playwrite.className}`}
        >
            <AnimatePresence mode="wait">
                {show && (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "inline-block" }}
                    >
                        {phrases[index].split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i !== phrases[index].split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Slogan;