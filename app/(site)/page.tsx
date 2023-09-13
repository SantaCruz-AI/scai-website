"use client";
import { Button } from "@material-tailwind/react";

import Box from "@/components/Box";
import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/components/Background";
import ScaiLogo from "@/components/ScaiLogo";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Home() {
  return (
    <div>
      <div className=" h-screen relative">
        <Background />

        <div className="pt-[140px] flex flex-row justify-center w-full items-center absolute top-0 z-11">
          <div className="flex flex-col  items-start text-white">
            <h1 className="pb-5  font-semibold text-6xl ">
              Welcome to <span className=" text-[#004BD1]">SCAI</span>
            </h1>
            <div className="sans text-[#93989D] flex max-w-md gap-4 font-semi pb-5">
              <h1>
                UCSC's leading AI Club to discover Machine Learning & Artificial
                Intelligence through engaging lectures, projects, and expert
                talks.{" "}
              </h1>
            </div>
            <button className="bg-white hover:bg-gray-100 rounded-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow">
              <h1 className="flex items-center">
                Newsletter
                <MdKeyboardArrowRight className="ml-2" />
              </h1>
            </button>
          </div>
          <div className="">
            <ScaiLogo />
          </div>
        </div>
        <Box />
      </div>
    </div>
  );
}
