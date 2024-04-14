import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] px-5 z-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-medium pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          ABOUT XUAN LAM
        </p>
        <p className="text-gray-300 text-center">
          As a high school student, I am deeply passionate about technology, coding, designing, and editing.
          Currently, I am immersing myself in the study of various programming languages. My overarching ambition is to become a Full-Stack Developer, as I am captivated by the intricacies of both Front-End and Back-End development.
          <br />
          <br />
          My focus lies predominantly in Front-End Web Development, where I find great satisfaction in crafting compelling, user-centric interfaces. Moreover, the prospect of mastering new languages fills me with anticipation and enthusiasm.
        </p>
      </div>
    </section>
  );
};

export default About;
