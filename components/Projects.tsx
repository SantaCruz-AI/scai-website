"use client";

import { Avatar } from "@material-tailwind/react";
import { BsLinkedin } from "react-icons/bs";
import WinnerProfile from "./WinnerProfile";
import Head from "next/head";

const Projects = (props: any) => {
  return (
    <div ref={props.forwardRef}>
      <h1 className="text-3xl font-bold pb-5">Winners</h1>
      <div className="flex flex-wrap md:gap-1 justify-center max-w-[1300px] mx-auto">
        <WinnerProfile
          profileImage="profilePics/Winners/1-MarioKart_Classifier.jpg"
          name="Matthew Do"
          project="#1: Mario Kart Image Classifier"
        />
        <WinnerProfile
          profileImage="profilePics/Winners/2-Shipment_Predictor.png"
          name="Chloe Chang"
          project="#2: Shipment Success Predictor"
        />{" "}
        <WinnerProfile
          profileImage="profilePics/Winners/3-Cyberbullying_Detector.jpg"
          name="Anshul Kolli"
          name2="Ivan Del Rio"
          project="#3: Cyberbullying Detector"
        />
        <WinnerProfile
          profileImage="profilePics/Winners/4-RL_Rainbow_Snake.jpg"
          name="Dylan Louie"
          project="#4: Reinforcement Learning Rainbow Snake"
        />
      </div>
    </div>
  );
};

export default Projects;
