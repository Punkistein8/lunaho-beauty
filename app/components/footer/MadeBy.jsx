'use client'
import { useState, useEffect } from "react";
import { Khula } from "next/font/google";

const links = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/henry-guerrero-leon/", icon: "in" },
    { label: "GitHub", url: "https://github.com/Punkistein8", icon: "gh" },
];

const khula1 = Khula({
    subsets: ["latin"],
    weight: "300",
});

const khula2 = Khula({
    subsets: ["latin"],
    weight: "800",
});

export default function MadeBy() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!show) return;
        const handleClick = (e) => {
            if (!e.target.closest(".madeby-dropdown")) setShow(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [show]);

    return (
        <div className="fixed bottom-2 right-2 md:bottom-3 md:right-3 z-50 flex items-end">
            <span className={`${khula1.className} relative text-[10px] py-[0.4px] md:text-base text-black bg-white/80 rounded-l-full px-2 md:px-4  md:py-2 shadow select-none`}>
                Made with <span className="text-[#d80000]">♥</span> by
            </span>
            <div className="relative">
                <button
                    className={`${khula2.className} text-[#e6beae] cursor-pointer font-extrabold bg-white/80 px-2 md:px-4 md:py-2 rounded-r-full shadow hover:bg-[#f2e7db] transition-all text-[10px] md:text-base`}
                    onClick={() => setShow((v) => !v)}
                    onBlur={() => setShow(false)}
                >
                    Henry
                </button>
                {show && (
                    <div className="madeby-dropdown absolute right-0 bottom-10 md:bottom-12 bg-white rounded-xl shadow-lg py-1 md:py-2 px-2 md:px-4 flex flex-col gap-1 md:gap-2 min-w-[90px] md:min-w-[120px] border border-[#e6beae]">
                        {links.map(link => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 md:gap-2 text-black hover:text-[#e6beae] text-xs md:text-sm transition"
                            >
                                {link.icon === "in" && (
                                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#E6BEAE" strokeWidth="2" /><path d="M8 11v5" stroke="#E6BEAE" strokeWidth="2" strokeLinecap="round" /><circle cx="8" cy="8" r="1" fill="#E6BEAE" /><path d="M12 11v5" stroke="#E6BEAE" strokeWidth="2" strokeLinecap="round" /><path d="M12 14c0-1.5 2-2 2-2s2 .5 2 2v2" stroke="#E6BEAE" strokeWidth="2" strokeLinecap="round" /></svg>
                                )}
                                {link.icon === "gh" && (
                                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.099 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z" stroke="#E6BEAE" strokeWidth="2" strokeLinejoin="round" /></svg>

                                )}
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}