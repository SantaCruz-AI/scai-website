"use client";

import { Avatar } from "@material-tailwind/react";
import { BsLinkedin } from "react-icons/bs";
import ProfileCard from "./ProfileCard";
import Head from "next/head";

const Officers = (props: any) => {
  return (
    <div ref={props.forwardRef}>
      <h1 className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent text-center  px-3 md:px-20 mt-10 font-semibold text-6xl pb-5">
        Officers
      </h1>
      <div className="flex flex-wrap md:gap-20 justify-center max-w-[1300px] mx-auto">
        <ProfileCard
          profileImage="profilePics/Officers/Ember Lu.png"
          name="Ember Lu"
          role="Co-President"
          linkedin="https://www.linkedin.com/in/ember-lu/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Ashmita Dua.png"
          name="Ashmita Dua"
          role="Co-President"
          linkedin="https://www.linkedin.com/in/duashmita/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/Austin Eng.png"
          name="Austin Eng"
          role="Finance Officer"
          linkedin="https://www.linkedin.com/in/austin-eng/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/Meika Alingog.png"
          name="Meika Alingog"
          role="Finance Officer and Marketing Officer"
          linkedin="https://www.linkedin.com/in/meika-alingog-b03b57371/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/Clara Sapugay.png"
          name="Clara Sapugay"
          role="Marketing Lead"
          linkedin="https://www.linkedin.com/in/clara-sapugay/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/Mahika Vohra.jpg"
          name="Mahika Vohra"
          role="Marketing Lead"
          linkedin="https://www.linkedin.com/in/mahikavohra/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/Thanh Nguyen.png"
          name="Thanh Nguyen"
          role="Instruction Officer"
          linkedin="https://www.linkedin.com/in/thanh-nguyen-a246bb216/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Anthony Furman.png"
          name="Anthony Furman"
          role="Competitions Lead"
          linkedin="https://www.linkedin.com/in/anthony-furman/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Jaisree David Ravikumar.png"
          name="Jaisree David Ravikumar"
          role="Competition Lead"
          linkedin="https://www.linkedin.com/in/jaisree-david-ravikumar-818799232/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Aarush Reddy.png"
          name="Aarush Reddy"
          role="Competitions Officer"
          linkedin="https://www.linkedin.com/in/aarush-reddy-20020629b/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Advait Sankaran.png"
          name="Advait Sankaran"
          role="Competitions Officer"
          linkedin="https://www.linkedin.com/in/advsan/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Krish Arora.png"
          name="Krish Arora"
          role="Webmaster"
          linkedin="https://www.linkedin.com/in/krish-arora1/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/Riddhi Gaddamwar.png"
          name="Riddhi Gaddamwar"
          role="Webmaster"
          linkedin="https://www.linkedin.com/in/riddhi-gaddamwar-3aa46a322/"
        />{" "}
        </div>
    </div>
  );
};

export default Officers;
