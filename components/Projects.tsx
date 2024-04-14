import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="z-20">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-medium pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        GITHUB REPOSITORIES
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/nextjs3.webp"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Lorem, ipsum dolor.</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel numquam pariatur, magnam natus sunt temporibus ipsam.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/nextjs3.webp"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Lorem ipsum dolor sit.</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugiat veniam dignissimos incidunt alias excepturi illum numquam.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/nextjs3.webp"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Lorem, ipsum dolor.
                </p>
                <p className="text-gray-500 text-[10px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis harum quia temporibus fugiat sint quos cupiditate consequuntur, odit minima labore!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/nextjs3.webp"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Lorem, ipsum dolor.</p>
                <p className="text-gray-500 text-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam accusamus rerum aut quos voluptate magnam voluptatum optio fugit ratione!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
