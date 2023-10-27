import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  style: "normal",
  weight: ["400", "600"],
});

type ProfileCardProps = {
  profileImage: string;
  name: string;
  role: string;
  linkedinImage?: string;
  linkedin?: string;
  date?: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  name,
  role,
  linkedinImage = "linkedin.png",
  linkedin,
  date,
}) => {
  return (
    <div className={nunito.className}>
      <div className="flex gap-20 justify-center md:m-10 m-5 ">
        <div className="flex flex-col items-center text-white">
          <img
            className="md:w-60 w-32 rounded-full object-cover"
            src={profileImage}
            alt={name}
          />

          <h1 className="pt-5 font-semibold  md:text-2xl text-lg">{name}</h1>
          <div className="h-[4rem] py-3 flex items-center justify-center">
            {" "}
            {/* Fixed height and flexbox for vertical centering */}
            <h1 className="text-[#6A717F] md:text-xl text-sm md:max-w-[200px] max-w-[100px] text-center">
              {role}
            </h1>
          </div>
          <div className="md:text-lg text-sm md:max-w-[200px] max-w-[100px] text-center">
            {date}
          </div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img className="pt-4" src={linkedinImage} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
