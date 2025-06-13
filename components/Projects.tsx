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
          profileImage="profilePics/Winners/food_safety.jpg"
          name="Jaisree David Ravikumar"
          name2="Vincent Siu"
          project="#1: Glove Detection for Food Safety"
        />
        <WinnerProfile
          profileImage="profilePics/Winners/endag_animals.jpg"
          name="Eric Honer"
          project="#2: Endangered Animals Classifier"
        />{" "}
        <WinnerProfile
          profileImage="profilePics/Winners/calmSense.jpg"
          name="Ember Lu"
          project="#3: CalmSense Panic Predictor"
        />
        <WinnerProfile
          profileImage="profilePics/Winners/song_rec.jpg"
          name="Aman Varshney"
          project="#4: Song Recommender"
        />
      </div>
    </div>
  );
};

export default Projects;
