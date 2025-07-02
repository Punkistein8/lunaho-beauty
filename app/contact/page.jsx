'use client'
import React from "react";

export default function Contact() {
    return (
        <div className="bg-[#fffbef] flex flex-col items-center justify-center w-full my-[24vh] overflow-hidden">

            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
                <form
                    className="w-full bg-[#f2e7db]/80 rounded-3xl shadow-lg px-6 md:px-12 py-10 flex flex-col gap-4"
                    autoComplete="off"
                >
                    {/* Row 1: Name */}
                    <div className="flex gap-2">
                        <label className="flex-1 bg-white/90 rounded-[2.5rem] px-4 py-2 text-lg text-black flex items-center justify-center border-4 border-white font-normal">
                            your name:
                        </label>
                        <input
                            type="text"
                            className="flex-1 bg-white/60 rounded-[2.5rem] px-4 py-2 text-lg text-black border-4 border-white outline-none"
                            placeholder=""
                            autoComplete="off"
                        />
                    </div>
                    {/* Row 2: Mail */}
                    <div className="flex gap-2">
                        <label className="flex-1 bg-white/90 rounded-[2.5rem] px-4 py-2 text-lg text-black flex items-center justify-center border-4 border-white font-normal">
                            your mail:
                        </label>
                        <input
                            type="email"
                            className="flex-1 bg-white/60 rounded-[2.5rem] px-4 py-2 text-lg text-black border-4 border-white outline-none"
                            placeholder=""
                            autoComplete="off"
                        />
                    </div>
                    {/* Row 3: Service type */}
                    <div className="flex gap-2">
                        <label className="flex-[1.2] bg-white/90 rounded-[2.5rem] px-4 py-2 text-lg text-black flex items-center justify-center border-4 border-white font-normal">
                            service type:
                        </label>
                        <div className="flex-[0.8] relative">
                            <select
                                className="appearance-none w-full bg-white/60 rounded-[2.5rem] px-4 py-2 text-lg text-gray-400 border-4 border-white outline-none"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    select one...
                                </option>
                                <option value="makeup">Makeup</option>
                                <option value="hair">Hair</option>
                                <option value="advice">Advice</option>
                            </select>
                            {/* Custom arrow */}
                            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-[#e6beae]">
                                ▼
                            </span>
                        </div>
                    </div>
                    {/* Row 4: Message */}
                    <div className="flex gap-2">
                        <label className="flex-1 bg-white/90 rounded-[2.5rem] px-4 py-2 text-lg text-black flex items-center justify-center border-4 border-white font-normal">
                            any message?
                        </label>
                        <input
                            type="text"
                            className="flex-1 bg-white/60 rounded-[2.5rem] px-4 py-2 text-lg text-black border-4 border-white outline-none"
                            placeholder=""
                            autoComplete="off"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}