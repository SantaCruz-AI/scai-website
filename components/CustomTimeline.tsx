"use client"
import React, {useMemo} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Link from "next/link";

const CustomTimeline = () => {

  const events = [
    {
      title: "Spring Quarter Info Night + GANS",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Decision Trees",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Diffusion",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Computer Vision",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Autonomous Vehicles",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "AI Safety",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Responsible Data Science",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "Nautilus",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "SCAI is No Limit Workshop",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
    {
      title: "SCAI is No Limit Competition",
      speaker: "Oliver",
      date: "4/4/23",
      link: ""
    },
  ]
  
  const active = 0;
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7BKFn0Dr8WjkikGThME5gUwsEnt22SyE",
  });

  const center = useMemo(() => ({  lat: 37.00092417331319, lng:-122.0625463702481 }), []);

  return (
    <div className="w-full py-2 px-20">
          <h1 className="text-6xl font-bold text-blue-400 py-5 ">Stay up to <span className="text-yellow-300">Date:</span></h1>
          <p className="text-blue-400 text-l font-semibold">Time: Tuesdays 6-7pm</p>
          <p className="text-md text-blue-400 font-semibold">(Click on the cards to be direct to the recording)</p>
          <h1 className="mt-2 text-yellow-300 text-6xl font-semibold">Fall 2023:</h1>
          <div className="w-full flex justify-center py-10 gap-2">
            <div className="w-1/2 flex">
              <div className="flex flex-wrap justify-center gap-4 m-auto">
              {events.map((event, i) => {
                if (i == active) {
                  return (
                    <Link href={event.link}>
                      <div className="p-1 text-white relative w-[150px] h-[200px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ">
                      <h1 className="text-5xl  p-1 text-yellow-300">{i}</h1>
                      <div className=" flex flex-col gap-4">
                        <div>
                          <h3 className="text-sm">Title-</h3>
                          <p className="ml-1 text-xs">{event.title}</p>
                        </div>
                        <div>
                          <h3 className="text-sm">Speaker-</h3>
                          <p className="ml-1 text-xs">{event.speaker}</p>
                        </div>
                        
                      </div>
                      <p className=" p-1 absolute bottom-0 left-0 text-xs font-semibold">{event.date}</p>
                    </div>
                    </Link>
                  )
                } else {
                  return (
                    <Link href={event.link}>
                      <div className="p-1 border border-gray-700 text-white relative w-[150px] h-[200px] rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-300 ease-in-out">
                        <h1 className="text-5xl  p-1 text-yellow-300">{i}</h1>
                        <div className=" flex flex-col gap-4">
                          <div>
                            <h3 className="text-sm">Title-</h3>
                            <p className="ml-1 text-xs">{event.title}</p>
                          </div>
                          <div>
                            <h3 className="text-sm">Speaker-</h3>
                            <p className="ml-1 text-xs">{event.speaker}</p>
                          </div>
                          
                        </div>
                        <p className=" p-1 absolute bottom-0 left-0 text-xs font-semibold">{event.date}</p>
                      </div>
                    </Link>
                  ) 
                }      
              })}
              </div>
              
            </div>
            <div className="w-1/2 flex justify-center">
            {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <GoogleMap
                  mapContainerClassName="map"
                  center={center}
                  zoom={16.7}
                >
                  <Marker position={{ lat: 37.00092417331319, lng:-122.0625463702481 }} />
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
  );
}

export default CustomTimeline;