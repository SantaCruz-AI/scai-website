"use client";
import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Link from "next/link";

import { BsCodeSlash } from "react-icons/bs";
import { HiPresentationChartBar } from "react-icons/hi";

const CustomTimeline = (props: any) => {
  const events = [
    {
      title: "Fall Quarter Info Night",
      speaker: "The entire SCAI team!",
      date: "10/3/23",
      recording: "https://drive.google.com/file/d/1YQC_bwMq0M6k4gTRB1k1uIXCRN4uJ5R7/view",
      slides: "https://docs.google.com/presentation/d/1_v71J9Gjv74z93x1X1fWSMKqFTragSNJt5Zzp6_muvc/edit?usp=sharing",
      code: "",
    },
    {
      title: "What is AI/ML?",
      speaker: "-",
      date: "10/10/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Stock Market Prediction",
      speaker: "Rahul Nadkarni",
      date: "10/17/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Sentiment Analysis",
      speaker: "Andrew Kato",
      date: "10/24/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "SCAI Jam",
      speaker: "-",
      date: "11/4/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Decision Tree Classifier",
      speaker: "-",
      date: "11/7/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Recommendation Algorithms",
      speaker: "-",
      date: "11/14/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Thanksgiving",
      speaker: "-",
      date: "11/21/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "Basic Neural Networks",
      speaker: "Jonathan Vengosh",
      date: "11/28/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "SCAI is No Limit",
      speaker: "Rahul Nadkarni, Jonathan Vengosh",
      date: "12/3/23",
      recording: "/",
      slides: "/",
      code: "/",
    },
  ];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7BKFn0Dr8WjkikGThME5gUwsEnt22SyE",
  });

  const center = useMemo(
    () => ({ lat: 37.00092417331319, lng: -122.0625463702481 }),
    []
  );

  const [upNext, setUpNext] = useState("");

  useEffect(() => {
    let today = new Date();
    let next: any = null;
    console.log(today) 
    

    events.forEach((event) => {
      if (next == null) {
        let date = new Date(event.date);
        date.setHours(18,0,0)
        if (date > today) {
          next = event.date;
        }
      }
    });

    setUpNext(next);
  }, []);

  return (
    <div ref={props.forwardRef} className="w-full py-2 px-3 md:px-20">
      <h1 className="text-6xl font-bold md:text-left text-center  bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent py-5 ">
        Fall Schedule
      </h1>
      <p className="text-white md:text-left text-center text-xl font-semibold">
        Tuesdays 5-6pm
      </p>
      <p className="text-white md:text-left text-center text-lg ">
        Location: E2-180
      </p>
      <p className="text-md md:text-left text-center text-[#6a717f]">
        (Click on the cards to be direct to the recording)
      </p>
      <div className="flex md:justify-start justify-center  gap-0.5 text-sm text-[#6a717f]">
        <div className=" my-auto">
          <HiPresentationChartBar />
        </div>
        : slide link
      </div>
      <div className="flex  md:justify-start justify-center gap-0.5 text-sm text-[#6a717f]">
        <div className=" my-auto">
          <BsCodeSlash />
        </div>
        : souce code
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center my-4 gap-2">
        <div className="w-full md:w-1/2 flex">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 m-auto">
            {events.map((event, i) => {
              let today = new Date();
              let date = new Date(event.date);
              if (upNext == event.date) {
                return (
                  <Link key={i} href={event.recording}>
                    <div className="p-1 text-white relative w-[140px] h-[200px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ">
                      <h1 className="text-5xl  p-1 text-yellow-300">{i + 1}</h1>
                      <div className="flex flex-col gap-1">
                        <p className="pl-1 text-sm">{event.title}</p>
                        <p className="pl-1 mt-1 text-xs">{event.speaker}</p>
                      </div>
                      <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                        <p className=" p-1 text-xs font-semibold">
                          {event.date}
                        </p>
                        
                      </div>
                    </div>
                  </Link>
                );
              } else if (today.getTime() > date.getTime()) {
                return (
                  <a target={"_blank"} rel={"noopener noreferrer"} key={i} href={event.recording}>
                    <div className="p-1 border border-gray-700 text-white relative w-[140px] h-[200px] rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition duration-300 ease-in-out">
                      <h1 className="text-5xl  p-1 text-yellow-300">{i + 1}</h1>
                      <div className="flex flex-col gap-1">
                        <p className="pl-1 text-sm">{event.title}</p>
                        <p className="pl-1 mt-1 text-xs">{event.speaker}</p>
                      </div>
                      <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                        <p className=" p-1 text-xs font-semibold">
                          {event.date}
                        </p>
                        <div className="flex justify-center my-auto gap-2 mr-2">
                          <a target={"_blank"} rel={"noopener noreferrer"} href={event.slides}>
                            <div className=" opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
                              <HiPresentationChartBar size={20} />
                            </div>
                          </a>
                          <a  target={"_blank"} rel={"noopener noreferrer"} href={event.code}>
                            <div className=" opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
                              <BsCodeSlash size={20} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              } else {
                return (
                  <div
                    key={i}
                    className="p-1 border border-gray-700 text-white relative w-[140px] h-[200px] rounded-lg"
                  >
                    <h1 className="text-5xl  p-1 text-yellow-300">{i + 1}</h1>
                    <div className="flex flex-col gap-1">
                      <p className="pl-1 text-sm">{event.title}</p>
                      <p className="pl-1 mt-1 text-xs">{event.speaker}</p>
                    </div>
                    <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                      <p className=" p-1 text-xs font-semibold">{event.date}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className=" w-full mt-5 md:mt-0 md:w-1/2 flex justify-center">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap mapContainerClassName="map" center={center} zoom={16.7}>
              <MarkerF
                position={{ lat: 37.00092417331319, lng: -122.0625463702481 }}
              />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomTimeline;
