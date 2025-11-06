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
          profileImage="profilePics/Officers/kevin.png"
          name="Kevin Bachelor"
          role="President"
          linkedin="https://www.linkedin.com/in/kevin-bachelor-585603283"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/ruthwika.png"
          name="Ruthwika Gajjala"
          role="Head of Instruction"
          linkedin="https://www.linkedin.com/in/ruthwika-gajjala/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/daksh.jpg"
          name="Daksh Shah"
          role="Instructor"
          linkedin="https://www.linkedin.com/in/dakshkshah/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/rishika.jpeg"
          name="Rishika Srinivas"
          role="Instructor"
          linkedin="https://www.linkedin.com/in/rishikasrinivas/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/eric.jpg"
          name="Eric Kimbrell"
          role="Instructor"
          linkedin="https://www.linkedin.com/in/ericnkimbrell/"
        />
        <ProfileCard
          profileImage="profilePics/template_profile.png"
          name="Eric Honer"
          role="Instructor & SCAI Is No Limit Officer"
          linkedin="https://www.linkedin.com/in/ehoner8/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/aashna.jpg"
          name="Aashna Shimkhada"
          role="Head of Finance"
          linkedin="https://www.linkedin.com/in/aashna-shimkhada/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/template_profile.png"
          name="Pujitha Samudrala"
          role="Finance Officer"
          linkedin="https://www.linkedin.com/in/pujitha-samudrala-434a27214/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/clara.jpg"
          name="Clara Sapugay"
          role="Head of Marketing"
          linkedin="https://www.linkedin.com/in/clara-sapugay/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/mandy.jpg"
          name="Mandy Wu"
          role="Marketing Officer"
          linkedin="https://www.linkedin.com/in/mandywu8/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/ember.jpg"
          name="Ember Lu"
          role="Marketing Officer"
          linkedin="https://www.linkedin.com/in/ember-lu/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/minahill.jpg"
          name="Minahill Shafi"
          role="Marketing and Finance Officer"
          linkedin="https://linkedin.com/in/minahill-shafi-356716352/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/Officers/anthony.jpg"
          name="Anthony Furman"
          role="Competitions Manager"
          linkedin="https://www.linkedin.com/in/anthony-furman/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/template_profile.png"
          name='Alex Brenzy'
          role="SCAI is No Limit Officer"
          linkedin="/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/ashmita.JPG"
          name='Ashmita Dua'
          role="SCAI is No Limit and Finance Officer"
          linkedin="https://linkedin.com/in/duashmita/"
        />
        <ProfileCard
          profileImage="profilePics/Officers/neha.jpg"
          name="Neha Ashwin"
          role="Webmaster"
          linkedin="https://www.linkedin.com/in/nehashwin/"
        />{" "}
        <ProfileCard
          profileImage="profilePics/template_profile.png"
          name="Varun Satishkumar"
          role="Website Officer"
          linkedin="https://www.linkedin.com/in/varun-satish-kumar/"
        />{" "}
      </div>
    </div>
  );
};

export default Officers;
