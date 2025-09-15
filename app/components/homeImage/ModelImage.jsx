// ModelImage.jsx
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ModelImage({ images }) {
    const defaultImages = [
        "/img1.jpeg",
        "/img2.jpeg",
        "/img3.jpeg"
    ];
    const imgs = images && images.length ? images : defaultImages;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (imgs.length > 1) {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % imgs.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [images]);

    return (
        <motion.div
            className="
                mt-14
                relative
                overflow-hidden
                mx-auto
                w-[200px] h-[245px]
                md:top-0
                sm:w-[200px] sm:h-[200px]
                md:w-[260px] md:h-[260px]
                lg:w-[320px] lg:h-[320px]
                xl:w-[450px] xl:h-[550px]
                rounded-2xl
                shadow-lg
            "
            animate={{
                y: [0, -2, 0, 2, 0],
                x: [0, 2, 0, -2, 0],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0.25, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.25, scale: 1.12 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Image
                        src={imgs[index]}
                        alt="Model"
                        fill
                        className="object-cover w-full h-full"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 260px, (max-width: 1280px) 320px, 380px"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}