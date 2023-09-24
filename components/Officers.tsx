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
      <div className="flex flex-wrap gap-20 justify-center max-w-[1300px] mx-auto">
        <ProfileCard
          profileImage="profilePics/rahul.jpeg"
          name="Rahul Nadkarni"
          role="Co-President"
          linkedin="https://www.linkedin.com/in/rahul-nadkarni-74475015a/"
        />
        <ProfileCard
          profileImage="profilePics/jonathan.jpg"
          name="Jonathan Vengosh"
          role="Co-President"
          linkedin="https://www.linkedin.com/in/jonathan-vengosh-5084a6203/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/coen.jpg"
          name="Coen Adler"
          role="Head of Instruction"
          linkedin="https://www.linkedin.com/in/coen-adler"
        />
        <ProfileCard
          profileImage="profilePics/andrew.jpeg"
          name="Andrew Kato"
          role="Instructor"
          linkedin="https://linkedin.com/in/andrewkato"
        />
        <ProfileCard
          profileImage="profilePics/kevin.jpg"
          name="Kevin Bachelor"
          role="SCAI is no Limit Competition Manager"
          linkedin="https://www.linkedin.com/in/kevin-bachelor-585603283"
        />{" "}
        <ProfileCard
          profileImage="profilePics/vishruth.jpg"
          name="Vishruth Bharath"
          role="Brain Teaser Competition Manager"
          linkedin="https://www.linkedin.com/in/vishb/"
        />
        <ProfileCard
          profileImage="profilePics/aanchel.jpg"
          name="Aanchel Shimkhada"
          role="Head of Marketing"
          linkedin="https://www.linkedin.com/in/aanchel-shimkhada"
        />{" "}
        <ProfileCard
          profileImage="profilePics/rishika.jpg"
          name="Rishika Srinivas"
          role="Outreach/Fundraising Manager"
          linkedin="https://www.linkedin.com/in/rishika-srinivas-a73098247/"
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
          linkedin="https://www.linkedin.com/in/neel-walse/"
        />
        <ProfileCard
          profileImage="profilePics/harish.jpg"
          name="Harish Dukkipati"
          role="Financial Advisor"
          linkedin="https://www.linkedin.com/in/harish-dukkipati/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/brandon.jpg"
          name="Brandon Castro"
          role="Creative Director/Web-Dev"
          linkedin="https://www.linkedin.com/in/brandon-castro22/"
        />
        <ProfileCard
          profileImage="profilePics/oliver.jpg"
          name="Oliver Lokhandwala"
          role="Webmaster"
          linkedin="https://www.linkedin.com/in/oliver-lokhandwala/"
        />{" "}
      </div>
    </div>
  );
};

export default Officers;
