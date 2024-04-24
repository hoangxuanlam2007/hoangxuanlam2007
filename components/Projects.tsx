"use client"

import Link from "next/link";
import React from "react";

import { IoMdLink } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { BsTag } from "react-icons/bs";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="z-20 px-5">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-medium pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        GITHUB REPOSITORIES
      </p>
      <div className="container mx-auto 2xl">
        <div className="grid grid-row md:grid-cols-2 gap-6">

          <Link
            href="https://github.com/pdkhanh3011/tftactics0523"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />tftactics0523</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                  DTCL+ is a website that provides player in-game tier lists, team-comps, item guides, database,... using React, styled-component, Firebase, redux, redux toolkit
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />3</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />0</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> JavaScript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="https://github.com/hoangxuanlam2007/2day4cast"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />2day4cast</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                A real-time weather forecast web application built with Next.js and ShadcnUI. A simple yet powerful tool for seamless weather updates and exploration.
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />1</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />0</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#3178C6]" /> TypeScript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="https://github.com/hoangxuanlam2007/BaloShulker"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />BaloShulker</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                BaloShulker is a Minecraft Paper plugin that enhances the functionality of shulker boxes that allows players to interact with shulker boxes more conveniently by opening them with a simple right-click.
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />1</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />5</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#A97BFF]" /> Kotlin</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="https://github.com/hoangxuanlam2007/ChuyenExp"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />ChuyenExp</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                  A simple homemade Plugin for in-game experience transaction for Minecraft Java Edition! ChuyenExp is a Paper plugin for Minecraft servers that allows players to transfer exp to other players.
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />1</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />2</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#A97BFF]" /> Kotlin</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="https://github.com/hoangxuanlam2007/ChimmLofiPlaylist"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />ChimmLofiPlaylist</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                ChimmLofiPlaylist is a simple yet stylish music player built using React. The player offers basic functionalities like play, pause, skip, volume control, and even shuffle!
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />4</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />4</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> JavaScript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="https://github.com/hoangxuanlam2007/ChimmPlaylist"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
          <div className="rounded-2xl bg-[#1D232A]">
            <div className="flex-row flex">
              <div className="p-8 flex flex-col">
                <div className="text-white opacity-60 font-normal text-lg flex flex-row content-center items-center flex-wrap gap-x-3"><IoMdLink />ChimmPlaylist</div>
                <div className="text-white opacity-60 font-thin text-sm mt-1 mb-5">
                  My very first project using pure HTML, CSS and JavaScript. This Web Music Player is very simple to use although the loading time is a bit slow as mp3 files are stored and loaded instantly onload.
                </div>
                <div className="flex flex-row content-center justify-between items-center flex-wrap">
                  <div className="flex flex-row content-center items-center flex-wrap gap-x-5">
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="branches"><AiOutlineBranches />1</div>
                    <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1" id="tags"><BsTag />10</div>
                  </div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#E34C26]" /> HTML</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

        </div>
        <div className="mx-auto mt-6 rounded-full bg-[#1D232A] max-w-fit px-5 py-3 text-[#ffffff60] text-center font-thin select-none cursor-pointer"
          onClick={() => window.open("https://github.com/hoangxuanlam2007?tab=repositories")}
        >
          See All
        </div>
      </div>
    </section>
  );
};

export default Projects;
