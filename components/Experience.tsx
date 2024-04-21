import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="z-20 px-5">
      <h1 className="text-white font-semibold text-center text-5xl md:text-6xl pt-[35px] z-20">
        MY JOURNEY
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-medium pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        MY CODING JOURNEY
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">HIGHSCHOOL /</span> Student
          </p>
          <p className="text-gray-300">FEB 2020 - PRESENT, HANOI</p>
        </div>
        <p className="text-gray-300 pt-5">
          Currently, I am a high school student with an interest and passion for programming and technology. Accessed to laptops from an early age, the era when Adobe Flash was prevalent, I have been captivated by web-based games. It wasn&#x2019;t until secondary school that I began to explore further, creating Minecraft servers with Craftbukkit, watching youtube videos, configuring and installing plugins myself.
          <br />
          <br />
          Gradually, I ventured into the realm of coding, with my first &quot;Hello World&quot; written in C++ using Dev C++, marking the beginning of a new journey. After delving into C++ for a while, I became fascinated by user interfaces and the inner workings of websites. Curious about the mechanics of websites, I started my journey with WordPress and Google&#x2019;s Blogger, though it seemed kinda weird to start from here. After that, I delved into HTML, CSS, and JavaScript.
          <br />
          <br />
          Over time, I embarked on numerous projects utilizing frameworks like React and Next.js, even collaborating with a college student. This collaboration helped me understand Back-End concepts such as database management, authentication, and APIs.
          <br />
          <br />
          In the summer of 2023, I had the fortune of joining a Minecraft server, where I continued to learn and develop. Eventually, I coded two plugins using Kotlin Maven instead of Java, a significant achievement for me when diving into Object-Oriented Programming. At the moment, I&#x2019;m really excited to keep learning and trying out different programming languages.
        </p>
        <div className="flex flex-row content-around flex-wrap">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
