'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
    { label: "home", path: "/" },
    { label: "work", path: "/work" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
];

const workCategories = [
    { label: "bridal", value: "bridal" },
    { label: "social makeup", value: "social_makeup" },
    { label: "fx makeup", value: "fx_makeup" },
    { label: "editorial", value: "editorial" },
    { label: "no makeup look", value: "no_makeup_look" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const submenuTimeout = useRef();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Cierra el submenú al navegar
    useEffect(() => {
        setShowSubmenu(false);
    }, [pathname]);

    // Cierra el submenú al hacer click fuera
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest("#work-menu")) setShowSubmenu(false);
        };
        if (showSubmenu) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [showSubmenu]);

    const handleClick = (item) => {
        if (item.label === "work") {
            setShowSubmenu((v) => !v);
        } else {
            router.push(item.path);
        }
    };

    const handleCategoryClick = (cat) => {
        router.push(`/work?cat=${cat.value}`);
        setShowSubmenu(false);
    };

    // Nuevo: delay para evitar que desaparezca el submenú al pasar entre botón y menú
    const handleWorkMouseEnter = () => {
        clearTimeout(submenuTimeout.current);
        setShowSubmenu(true);
    };

    const handleWorkMouseLeave = () => {
        submenuTimeout.current = setTimeout(() => setShowSubmenu(false), 120);
    };

    return (
        <nav className="select-none fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-full shadow-lg px-4 py-2 flex gap-2 z-50 max-w-92 justify-center items-center">
            {navItems.map((item) => (
                item.label === "work" ? (
                    <div
                        key={item.label}
                        className="relative"
                        id="work-menu"
                        onMouseEnter={handleWorkMouseEnter}
                        onMouseLeave={handleWorkMouseLeave}
                    >
                        <button
                            onClick={() => handleClick(item)}
                            className={`${mounted &&
                                (
                                    (item.path === "/" && pathname === "/") ||
                                    (item.path !== "/" && pathname.startsWith(item.path))
                                )
                                ? "bg-[#e6beae]"
                                : "bg-white hover:bg-[#f5e6df]"
                            } text-black font-normal rounded-[20px] px-5 py-2 text-base transition-all hover:cursor-pointer`}
                        >
                            {item.label}
                        </button>
                        {showSubmenu && (
                            <div
                                className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg py-2 px-4 flex flex-col gap-1 min-w-[180px] z-50"
                            >
                                {workCategories.map((cat) => (
                                    <button
                                        key={cat.value}
                                        onClick={() => handleCategoryClick(cat)}
                                        className="text-black text-[14px] md:text-balance px-3 py-1 rounded-lg hover:bg-[#e6beae]/40 transition cursor-pointer"
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div key={item.label} className="relative">
                        <button
                            onClick={() => handleClick(item)}
                            className={`${mounted &&
                                (
                                    (item.path === "/" && pathname === "/") ||
                                    (item.path !== "/" && pathname.startsWith(item.path))
                                )
                                ? "bg-[#e6beae]"
                                : "bg-white hover:bg-[#f5e6df]"
                            } text-black font-normal rounded-[20px] px-5 py-2 text-base transition-all hover:cursor-pointer`}
                        >
                            {item.label}
                        </button>
                    </div>
                )
            ))}
        </nav>
    )
};

export default Navbar;