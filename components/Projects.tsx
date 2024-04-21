import Link from "next/link";
import React from "react";

import { IoMdLink } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";

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
        <div className="grid grid-rows-2 grid-flow-row md:grid-flow-col gap-3">

          <Link
            href="/"
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
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><AiOutlineBranches />3</div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> Javascript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="/"
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
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><AiOutlineBranches />3</div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> Javascript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="/"
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
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><AiOutlineBranches />3</div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> Javascript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

          <Link
            href="/"
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
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><AiOutlineBranches />3</div>
                  <div className="text-white opacity-60 font-thin text-sm flex flex-row content-center items-center flex-wrap gap-x-1"><FaCircle className="text-[#f1e05a]" /> Javascript</div>
                </div>
              </div>
            </div>
          </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Projects;
