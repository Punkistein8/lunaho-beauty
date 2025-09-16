import { Ephesis, Khula } from "next/font/google";

const ephesis = Ephesis({
    subsets: ["latin"],
    weight: "400",
});

const khula = Khula({
    subsets: ["latin"],
    weight: "300",
});

const PageTitle = () => (
    <div className="absolute left-10 top-22 md:top-0 md:left-20 select-none">
        <div
            className={`font-normal max-h-21 text-black text-[40px] md:text-[78px] leading-[normal] ${ephesis.className}`}
        >
            Luna
        </div>
        <div
            className={`font-light text-black text-[10px] md:text-lg tracking-[1.5px] leading-[normal] ${khula.className}`}
        >
            makeup artist
        </div>
    </div>
);

export default PageTitle;