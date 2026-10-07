"use client";

import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const key = process.env.NEXT_PUBLIC_NOT_A_GOOGLE_API as any

const CustomTimeline = (props: any) => {
  const events = [
    {
      title: "Intro to SCAI",
      speaker: "",
      date: "09/28/26",
      recording:
        "/",
      slides:
        "/",
      code: "",
    },
    {
      title: "Intro to AI/ML",
      speaker: "",
      date: "10/05/26",
      recording:
        "",
      slides: "",
      code: "",
    },
    {
      title: "Linear Regression",
      speaker: "",
      date: "10/12/26",
      recording:
        "/",
      slides:
        "/",
      code: "/",
    },
    {
      title: "Social",
      speaker: "",
      date: "10/19/26",
      recording:
        "/",
      slides: "/",
      code: "/",
    },
    {
      title: "KNN/Clustering",
      speaker: "",
      date: "10/26/26",
      recording: "",
      slides: "",
      code: "",
    },
    {
      title: "Intro to Neural Networks",
      speaker: "",
      date: "11/02/26",
      recording: "/",
      slides: "",
      code: "/",
    },
    {
      title: "Reinforcement Learning",
      speaker: "",
      date: "11/09/26",
      recording: "",
      slides: "",
      code: "",
    },
    {
      title: "AI Research vs AI in the Industry",
      speaker: "",
      date: "11/16/26",
      recording: "/",
      slides: "gi",
      code: "/",
    },
    {
      title: "Thanksgiving Holiday",
      speaker: "",
      date: "11/23/26",
      recording: "/",
      slides: "/",
      code: "/",
    },
    {
      title: "SiNL",
      speaker: "",
      date: "11/30/26",
      recording: "/",
      slides: "/",
      code: "/",
    },
  ];
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key,
  })

  //console.log(process.env.NOT_A_GOOGLE_API as string)
  const center = useMemo(
    () => ({ lat: 37.00092417331319, lng: -122.0625463702481 }),
    []
  );

  const [upNext, setUpNext] = useState("");

  useEffect(() => {
    let today = new Date();
    let next: any = null;
    //console.log(today);

    events.forEach((event) => {
      if (next == null) {
        let date = new Date(event.date);
        date.setHours(18, 0, 0);
        if (date > today) {
          next = event.date;
        }
      }
    });

    setUpNext(next);
  }, []); // Runs on UI mount

  return (
    <div ref={props.forwardRef} className="w-full py-2 px-3 md:px-20">
      <h1 className="text-6xl font-bold md:text-left text-center  bg-gradient-to-b from-red-800 via-orange-500 to-red-700 bg-clip-text text-transparent py-5 ">
        Fall Schedule
      </h1>
      <p className="text-white md:text-left text-center text-xl font-semibold">
        Mondays 6-7pm
      </p>
      <p className="text-white md:text-left text-center text-lg ">
        Location: E2-180
      </p>

      <div className="w-full flex flex-col md:flex-row justify-center my-4 gap-2">
        <div className="w-full md:w-1/2 flex">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 m-auto">
            {events.map((event, i) => (
              <div
                key={i}
                className={`p-1 text-white relative w-[140px] h-[200px] rounded-lg transition duration-300 ease-in-out ${
                  upNext == event.date
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                    : "border border-gray-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
                }`}
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
            ))}
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
