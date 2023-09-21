"use client";

import { Avatar } from "@material-tailwind/react";
import { BsLinkedin } from "react-icons/bs";
import ProfileCard from "./ProfileCard";
import Head from "next/head";

const Officers = () => {
  return (
    <div>
      <h1 className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent  text-center mt-10 font-semibold text-6xl ">
        Officers
      </h1>
      <div className="flex flex-wrap gap-20 justify-center max-w-[1400px] mx-auto">
        <ProfileCard
          profileImage="profilePics/rahul.jpeg"
          name="Rahul Nadkarni"
          role="Co-President"
        />
        <ProfileCard
          profileImage="profilePics/jonathan.jpg"
          name="Jonathan Vengosh"
          role="Co-President"
        />{" "}
        <ProfileCard
          profileImage="profilePics/coen.jpg"
          name="Coen Adler"
          role="Head of Instruction"
        />
        <ProfileCard
          profileImage="profilePics/kevin.jpg"
          name="Kevin Bachelor"
          role="SCAI is no Limit Competition Manager"
        />{" "}
        <ProfileCard
          profileImage="profilePics/vishruth.jpg"
          name="Vishruth Bharath"
          role="Brain Teaser Competition Manager"
        />
        <ProfileCard
          profileImage="profilePics/aanchel.jpg"
          name="Aanchel Shimkhada"
          role="Head of Marketing"
        />{" "}
        <ProfileCard
          profileImage="profilePics/rishika.jpg"
          name="Rishika Srinivas"
          role="Outreach/Fundraising Manager"
        />{" "}
        <ProfileCard
          profileImage="profilePics/ananth.jpg"
          name='Anath "Ant" Srikanth'
          role="Events Manager"
        />
        <ProfileCard
          profileImage="profilePics/neel.jpg"
          name="Neel Walse"
          role="Graphics Officer"
        />
        <ProfileCard
          profileImage="profilePics/harish.jpg"
          name="Harish Dukkipati"
          role="Financial Advisor"
        />{" "}
        <ProfileCard
          profileImage="profilePics/brandon.jpg"
          name="Brandon Castro"
          role="Creative Director/Web-Dev"
        />
        <ProfileCard
          profileImage="profilePics/oliver.jpg"
          name="Oliver Lokhandwala"
          role="Webmaster"
        />{" "}
      </div>
    </div>
  );
};

export default Officers;
