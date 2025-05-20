'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { label: "home", path: "/" },
    { label: "work", path: "/work" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = (item) => {
        router.push(item.path);
    };

    return (
        <nav className="select-none fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-full shadow-lg px-4 py-2 flex gap-2 z-50 max-w-92 justify-center items-center">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleClick(item)}
                    className={`${mounted && pathname === item.path
                            ? "bg-[#e6beae]"
                            : "bg-white hover:bg-[#f5e6df]"
                        } text-black font-normal rounded-[20px] px-5 py-2 text-base transition-all hover:cursor-pointer`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    )
};

export default Navbar;