// ModelImage.jsx
import Image from "next/image";
import { motion } from "framer-motion";
import model1 from "../images/model1.jpeg";

// Valores extraídos de tu blob.svg
const blobPath =
    "M343.413 83.559C376.981 104.569 410.55 126.788 432.768 159.148C454.986 191.268 466.095 233.289 458.608 271.446C451.122 309.362 424.798 343.413 396.543 375.049C368.046 406.686 337.617 435.666 301.392 447.016C265.167 458.367 223.387 452.088 187.887 436.149C152.628 419.968 123.889 394.128 103.603 364.423C83.559 334.719 71.7255 301.15 68.103 267.34C64.722 233.289 69.069 198.996 79.4535 163.979C89.838 128.719 106.26 92.736 134.274 69.069C162.288 45.1605 201.894 34.0515 238.843 38.3985C275.551 42.7455 309.603 62.5485 343.413 83.559Z";
const width = 480;
const height = 480;

export default function ModelImage() {
    return (
        <motion.div
            className="absolute overflow-hidden md:right-16 md:top-[20vh]"
            style={{
                width: `${width}px`,
                height: `${height}px`,  
                WebkitClipPath: `path('${blobPath}')`,
                clipPath: `path('${blobPath}')`,
            }}
            animate={{
                y: [0, -20, 0, 15, 0], // Flotación vertical
                x: [0, 10, 0, -10, 0], // Flotación horizontal leve
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Image
                src={model1}
                alt="Model"
                width={width}
                height={height}
                className="w-full h-full object-cover"
                style={{
                    width: "100%",
                    height: "150%",
                    objectFit: "cover",
                }}
            />
        </motion.div>
    );
}
