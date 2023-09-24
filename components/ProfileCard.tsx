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
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  name,
  role,
  linkedinImage = "linkedin.png",
  linkedin,
}) => {
  return (
    <div className={nunito.className}>
      <div className="flex flex-wrap gap-20 justify-center m-10  ">
        <div className="flex flex-col items-center text-white">
          <img
            className="w-60 rounded-full object-cover"
            src={profileImage}
            alt={name}
          />

          <h1 className="pt-5 font-semibold text-2xl">{name}</h1>
          <div className="h-[4rem] py-2 flex items-center justify-center">
            {" "}
            {/* Fixed height and flexbox for vertical centering */}
            <h1 className="text-[#6A717F] text-xl max-w-[200px] text-center">
              {role}
            </h1>
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
