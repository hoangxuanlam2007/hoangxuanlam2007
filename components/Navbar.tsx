"use client";

import Image from "next/image";
import React from "react";

import { IoBugSharp } from "react-icons/io5";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-5 md:px-10">
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
            title="Report a bug"
            onClick={() => window.open("https://github.com/hoangxuanlam2007/hoangxuanlam2007/issues/new")}
            className="flex flex-col align-middle items-center justify-center content-center transition-all duration-200 ease-linear z-[1] text-2xl cursor-pointer hover:bg-[#ffffff] hover:text-black rounded-xl text-white p-3"
          >
            <IoBugSharp /> <span className="text-xs leading-tight tracking-tighter">Bug report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
