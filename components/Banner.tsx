"use client";

import React from "react";
import Image from "next/image";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-10 mt-[70px] md:mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex scale-90 md:scale-100">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="Hoàng Xuân Lâm"
          />
        </div>

        <div className="flex flex-col gap-6 my-5 cursor-pointer tracking-tighter text-4xl md:text-5xl lg:text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Hoàng Xuân Lâm
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter mr-2 text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Gaming
            </span>
          </p>
          <Image src="/bocchi.gif" height={30} width={30} alt="bocchi" />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
        Enthusiastic & passionate high school student with a focus on React Native development, aspiring to create responsive and intuitive Web applications.
        </p>
        <div className="text-md flex justify-center flex-col mt-2 gap-y-5">
          <button
            onClick={() => window.open("https://www.facebook.com/xuanlam.ne/")}
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[1px] border-white hover:border-transparent "
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FiFacebook className="socialIcon" /> Facebook 1
            </span>
          </button>
          <button
            onClick={() => window.open("https://www.facebook.com/ch1mmm/")}
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[1px] border-white hover:border-transparent "
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FiFacebook className="socialIcon" /> Facebook 2
            </span>
          </button>
          <button
            onClick={() => window.open("https://www.instagram.com/xuanlam.ne_/")}
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[1px] border-white hover:border-transparent "
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FaInstagram className="socialIcon" /> Instagram
            </span>
          </button>
          <button
            onClick={() => window.open("https://github.com/hoangxuanlam2007")}
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[1px] border-white hover:border-transparent "
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FaGithub className="socialIcon" /> Github
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;