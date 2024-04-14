"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={142}
            height={142}
            sizes="100vw"
            className="h-auto"
          />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("/")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Bugs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
