import React, { useState, useEffect } from "react";

import { FaCode } from "react-icons/fa";

const TechStack: React.FC<{}> = () => {

  return (
    <section
      id="detail"
      className="h-full relative overflow-hidden mt-[-5rem] px-5 z-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col flex-wrap gap-5 mx-auto max-w-[900px] bg-[#1D232A] p-4 pb-5 text-[#d1d5db] rounded-2xl">
        <div className="text-xl text-center flex flex-row justify-center items-center align-center content-center gap-3"><FaCode />Tech Stack</div>
        <div className="flex flex-row flex-wrap justify-center content-center gap-3">
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">HTML</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">CSS</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Tailwind</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">JavaScript</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">React</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Nodejs</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Next.js</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">C++</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">C#</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Java</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Kotlin</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Git</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">npm</div>
            <div className="px-3 py-1 rounded-full bg-[#6B76F0] text-black cursor-pointer">Yarn</div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;