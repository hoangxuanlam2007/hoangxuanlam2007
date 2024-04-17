"use client"

import React, { useState, useEffect } from "react";

import moment from 'moment';

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { TfiGithub } from "react-icons/tfi";
import { FaDev } from "react-icons/fa";

const Detail: React.FC<{}> = () => {
    const [time, setTime] = useState(moment().utcOffset('+0700').format('HH:mm'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().utcOffset('+0700').format('HH:mm'));
        }, 1000);
        return () => clearInterval(interval);
        }, []);

  return (
    <section
      id="detail"
      className="h-full relative overflow-hidden mt-[-5rem] px-5 z-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="mx-auto max-w-[900px] bg-neutral-800 p-4 text-[#d1d5db] rounded-2xl">

        <div className="flex flex-row justify-between items-center flex-wrap mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><IoLocationSharp /></span>
                Location:
            </div>
            <div className="flex text-right mr-2 ml-3">Hanoi, Vietnam</div>
        </div>

        <div className="flex flex-row justify-between items-center flex-wrap mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><MdOutlineWorkOutline /></span>
                Job:
            </div>
            <div className="flex text-right mr-2 ml-3">Work alone</div>
        </div>

        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><GoClock /></span>
                Current time:
            </div>
            <div className="flex text-right mr-2 ml-3">{time}&nbsp;<span className="opacity-75">&#40;GMT+7&#41;</span></div>
        </div>

        
        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><TfiGithub /></span>
                Github:
            </div>
            <div className="text-right mr-2 ml-3 truncate">hoangxuanlam2007</div>
        </div>

        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><FaDev /></span>
                Dev:
            </div>
            <div className="text-right mr-2 ml-3 truncate">hoangxuanlam2007</div>
        </div>

        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><GoMail /></span>
                Email:
            </div>
            <div className="text-right mr-2 ml-3 truncate">chim31102007@gmail.com</div>
        </div>

        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><GoMail /></span>
                Email:
            </div>
            <div className="text-right mr-2 ml-3 truncate">hoangxuanlam2007@outlook.com</div>
        </div>
        
      </div>
    </section>
  );
};

export default Detail;