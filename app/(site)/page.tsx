"use client";
import { ImCancelCircle } from "react-icons/im";
import { useRef } from "react";
import Background from "@/components/Background";
import ScaiLogo from "@/components/ScaiLogo";
import NewsletterButton from "@/components/NewsletterButton";
import CustomTimeline from "@/components/CustomTimeline";
import Navbar from "@/components/NavBar";
import Officers from "@/components/Officers";

export default function Home() {
  const schedule = useRef(null);
  const officers = useRef(null);
  const home = useRef(null);

  return (
    <div>
      <Navbar scheduleRef={schedule} officersRef={officers} />
      <div className=" relative">
        <Background />

        <div className="pt-[140px] flex-col md:flex md:flex-row  justify-center w-full items-center absolute top-0 z-11">
          <div className=" sm:order-1 md:order-2">
            <ScaiLogo />
          </div>
          <div className="flex flex-col md:items-start px-10 items-center md:text-left text-center text-white sm:order-2 md:order-1">
            <h1 className="pb-5  font-semibold md:text-6xl text-4xl">
              Welcome to{" "}
              <span className="bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                SCAI
              </span>
            </h1>
            <div className="sans text-[#93989D] md:text-base text-sm flex max-w-md gap-4 font-semi pb-5">
              <h1>
                UCSC&apos;s leading AI Club to discover Machine Learning &
                Artificial Intelligence through engaging lectures, projects, and
                expert talks.{" "}
              </h1>
            </div>
            <NewsletterButton />
          </div>
        </div>

        <CustomTimeline forwardRef={schedule} />
        <div className="py-20">
          {/* <Projects/> */}
          <Officers forwardRef={officers} />
        </div>

        <div className="bg-gray-900 w-full h-36"></div>
      </div>
    </div>
  );
}
