"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 z-20">
      <div className="pb-10 justify-center flex flex-wrap content-center">
        {/* {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })} */}
        <Link
            href={"https://www.facebook.com/xuanlam.ne/"}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black p-1 hover:border-transparent mx-2"
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FiFacebook className="socialIcon footer" />
            </span>
          </Link>
          <Link
            href={"https://www.facebook.com/ch1mmm/"}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black p-1 hover:border-transparent mx-2"
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FiFacebook className="socialIcon footer" />
            </span>
          </Link>
          <Link
            href={"https://www.instagram.com/xuanlam.ne_/"}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black p-1 hover:border-transparent mx-2"
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FaInstagram className="socialIcon footer" />
            </span>
          </Link>
          <Link
            href={"https://github.com/hoangxuanlam2007"}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all ease-linear z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black p-1 hover:border-transparent mx-2"
          >
            <span className="flex align-middle content-center justify-center items-center gap-x-2">
              <FaGithub className="socialIcon footer" />
            </span>
          </Link>
      </div>
      <p className="text-gray-300 text-center text-sm">
        Created by Xuân Lâm with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
