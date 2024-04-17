"use client"

import React, { useState, useEffect } from "react";

import moment from 'moment';
import Swal from 'sweetalert2';

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

    const copyText = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const text = event.currentTarget.textContent || '';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Copied to clipboard',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to copy',
                        text: error.message
                    });
                });
        } else {
            // Fallback for browsers that don't support the Clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            Swal.fire({
                icon: 'success',
                title: 'Copied to clipboard',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

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
            <div className="text-right mr-2 ml-3 truncate cursor-pointer" onClick={copyText}>chim31102007@gmail.com</div>
        </div>

        <div className="flex flex-row justify-between items-center mb-1">
            <div className="flex justify-start py-2 px-1 items-center gap-x-3">
                <span className="text-xl"><GoMail /></span>
                Email:
            </div>
            <div className="text-right mr-2 ml-3 truncate cursor-pointer" onClick={copyText}>hoangxuanlam2007@outlook.com</div>
        </div>

      </div>
    </section>
  );
};

export default Detail;