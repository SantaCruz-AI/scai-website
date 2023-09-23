"use client"
import React, {useMemo} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Link from "next/link";

const CustomTimeline = () => {

  const events = [
    {
      title: "Fall Quarter Info Night",
      speaker: "The entire SCAI team!",
      date: "10/3/23",
      link: ""
    },
    {
      title: "What is AI/ML?",
      speaker: "Coen Adler",
      date: "10/10/23",
      link: ""
    },
    {
      title: "Stock Market Prediction",
      speaker: "Rahul Nadkarni",
      date: "10/17/23",
      link: ""
    },
    {
      title: "Sentiment Analysis",
      speaker: "Andrew Kato",
      date: "10/24/23",
      link: ""
    },
    {
      title: "SCAI Jam",
      speaker: "TBH",
      date: "11/4/23",
      link: ""
    },
    {
      title: "Decision Tree Classifier",
      speaker: "Coen Adler",
      date: "11/7/23",
      link: ""
    },
    {
      title: "Recommendation Algorithms",
      speaker: "Coen Adler",
      date: "11/14/23",
      link: ""
    },
    {
      title: "Thanksgiving",
      speaker: "",
      date: "11/21/23",
      link: ""
    },
    {
      title: "Basic Neural Networks",
      speaker: "Jonathan Vengosh",
      date: "11/28/23",
      link: ""
    },
    {
      title: "SCAI is No Limit",
      speaker: "Rahul Nadkarni, Jonathan Vengosh, Coen Adler",
      date: "12/3/23",
      link: ""
    },
  ]
  
  const active = 0;
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA7BKFn0Dr8WjkikGThME5gUwsEnt22SyE",
  });

  const center = useMemo(() => ({  lat: 37.00092417331319, lng:-122.0625463702481 }), []);

  return (
    <div className="w-full py-2 px-3 md:px-20">
          <h1 className="text-6xl font-bold  bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent py-5 ">Fall Schedule</h1>
          <p className="text-white text-xl font-semibold">Tuesdays 6-7pm</p>
          <p className="text-md text-[#6a717f]">(Click on the cards to be direct to the recording)</p>
          <div className="w-full flex flex-col md:flex-row justify-center py-10 gap-2">
            <div className="w-full md:w-1/2 flex">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 m-auto">
              {events.map((event, i) => {
                if (i == active) {
                  return (
                    <Link href={event.link}>
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
                      <p className=" p-1 absolute bottom-0 left-0 text-xs font-semibold">{event.date}</p>
                    </div>
                    </Link>
                  )
                } else {
                  return (
                      <div className="p-1 border border-gray-700 text-white relative w-[140px] h-[200px] rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-300 ease-in-out">
                        <h1 className="text-5xl  p-1 text-yellow-300">{i+1}</h1>
                        <div className=" flex flex-col gap-1">
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
                  <Marker position={{ lat: 37.00092417331319, lng:-122.0625463702481 }} />
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
  );
}

export default CustomTimeline;