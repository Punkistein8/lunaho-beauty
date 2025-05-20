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
    <div className="absolute left-20 select-none">
        <div
            className={`font-normal max-h-21 text-black text-[78px] leading-[normal] ${ephesis.className}`}
        >
            Luna
        </div>
        <div
            className={`font-light text-black text-lg tracking-[2.70px] leading-[normal] ${khula.className}`}
        >
            makeup artist
        </div>
    </div>
);

export default PageTitle;