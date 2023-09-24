"use client"
import React, {useMemo, useState, useEffect} from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Link from "next/link";

import { BsCodeSlash } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";


const CustomTimeline = (props:any) => {

  const events = [
    {
      title: "Fall Quarter Info Night",
      speaker: "The entire SCAI team!",
      date: "10/3/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "What is AI/ML?",
      speaker: "Coen Adler",
      date: "10/10/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Stock Market Prediction",
      speaker: "Rahul Nadkarni",
      date: "10/17/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Sentiment Analysis",
      speaker: "Andrew Kato",
      date: "10/24/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "SCAI Jam",
      speaker: "TBH",
      date: "11/4/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Decision Tree Classifier",
      speaker: "Coen Adler",
      date: "11/7/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Recommendation Algorithms",
      speaker: "Coen Adler",
      date: "11/14/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Thanksgiving",
      speaker: "",
      date: "11/21/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "Basic Neural Networks",
      speaker: "Jonathan Vengosh",
      date: "11/28/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
    {
      title: "SCAI is No Limit",
      speaker: "Rahul Nadkarni, Jonathan Vengosh, Coen Adler",
      date: "12/3/23",
      recording: "/",
      zoom: "/",
      code: "/",
    },
  ]
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7BKFn0Dr8WjkikGThME5gUwsEnt22SyE",
  });

  const center = useMemo(() => ({  lat: 37.00092417331319, lng:-122.0625463702481 }), []);

  const [upNext, setUpNext] = useState(""); 

  useEffect(() => {
    let today = new Date();
    let next:any = null; 

    events.forEach((event) => {
      if (next == null) {
        let date = new Date(event.date) 
        if (date > today) {
          next = event.date
        }
      }
    })

    setUpNext(next);

  }, []);

  return (
    <div ref={props.forwardRef} className="w-full py-2 px-3 md:px-20">
          <h1 className="text-6xl font-bold  bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent py-5 ">Fall Schedule</h1>
          <p className="text-white text-xl font-semibold">Tuesdays 6-7pm</p>
          <p className="text-md text-[#6a717f]">(Click on the cards to be direct to the recording)</p>
          <div className="flex gap-0.5 text-sm text-[#6a717f]"><div className="my-auto"><BiVideo/></div>: zoom link</div>
          <div className="flex gap-0.5 text-sm text-[#6a717f]"><div className="my-auto"><BsCodeSlash/></div>: souce code</div>
          
          <div className="w-full flex flex-col md:flex-row justify-center my-4 gap-2">
            <div className="w-full md:w-1/2 flex">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 m-auto">
              {events.map((event, i) => {
                let today = new Date(); 
                let date = new Date(event.date); 
                if (upNext == event.date) {
                  return (
                    <Link href={event.recording}>
                      <div className="p-1 text-white relative w-[140px] h-[200px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ">
                      <h1 className="text-5xl  p-1 text-yellow-300">{i+1}</h1>
                      <div className=" flex flex-col gap-1">
                        <div>
                          <h3 className="text-sm">Title-</h3>
                          <p className="ml-1 text-xs ">{event.title}</p>
                        </div>
                        <div>
                          <h3 className="text-sm">Speaker-</h3>
                          <p className="ml-1 text-xs">{event.speaker}</p>
                        </div>
                        
                      </div>
                      <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                          <p className=" p-1 text-xs font-semibold">{event.date}</p>
                          <div className="flex justify-center my-auto gap-2 mr-2"> 
                            <div className=" opacity-50">
                              <BiVideo size={20}/>
                            </div>
                            <div className=" opacity-50">
                              <BsCodeSlash size={20}/>
                            </div>
                          </div>
                        </div>
                    </div>
                    </Link>
                  )
                } else if (today.getTime() > date.getTime()) {
                  return (
                    <Link href={event.recording}>
                      <div className="p-1 border border-gray-700 text-white relative w-[140px] h-[200px] rounded-lg ">
                      <h1 className="text-5xl  p-1 text-yellow-300">{i+1}</h1>
                      <div className=" flex flex-col gap-1">
                        <div>
                          <h3 className="text-sm">Title-</h3>
                          <p className="ml-1 text-xs ">{event.title}</p>
                        </div>
                        <div>
                          <h3 className="text-sm">Speaker-</h3>
                          <p className="ml-1 text-xs">{event.speaker}</p>
                        </div>
                        
                      </div>
                      <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                          <p className=" p-1 text-xs font-semibold">{event.date}</p>
                          <div className="flex justify-center my-auto gap-2 mr-2"> 
                            <Link href={event.zoom}>
                              <div className=" opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
                                <BiVideo size={20}/>
                              </div>
                            </Link>
                            <Link href={event.code}>
                              <div className=" opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
                                <BsCodeSlash size={20}/>
                              </div>
                            </Link>
                          </div>
                        </div>
                    </div>
                    </Link>
                  )
                } else {
                  return (
                      <div className="p-1 border border-gray-700 text-white relative w-[140px] h-[200px] rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition duration-300 ease-in-out">
                        <h1 className="text-5xl  p-1 text-yellow-300">{i+1}</h1>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-sm">{event.title}</p>
                            <p className="pl-1 mt-1 text-xs">{event.speaker}</p> 
                        </div>
                        <div className="flex justify-between absolute bottom-0 left-0 w-full ">
                          <p className=" p-1 text-xs font-semibold">{event.date}</p>
                          <div className="flex justify-center my-auto gap-2 mr-2"> 
                            <div className="opacity-50">
                              <BiVideo size={20}/>
                            </div>
                            <div className="opacity-50">
                              <BsCodeSlash size={20}/>
                            </div>
                          </div>
                        </div>
                        
                    </div>
                  ) 
                }      
              })}
              </div>
              
            </div>
            <div className=" w-full mt-5 md:mt-0 md:w-1/2 flex justify-center">
            {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <GoogleMap
                  mapContainerClassName="map"
                  center={center}
                  zoom={16.7}
                >
                  <MarkerF position={{ lat: 37.00092417331319, lng:-122.0625463702481 }} />
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
  );
}

export default CustomTimeline;