//imports
import React from "react";
import { Nunito } from "next/font/google";
//sets up the Nunito font with specific configurations
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  style: "normal",
  weight: ["400", "600"],
});
//typescript def profile card
  //profile, name, and role required
type WinnerProfileProps = {
  profileImage: string;
  name: string;
  name2?: string;
  project: string;
  date?: string;
};

//card component
const WinnerProfile: React.FC<WinnerProfileProps> = ({
  profileImage,
  name,
  name2,
  project,
  date,
}) => {
  return (
    <div className={nunito.className}>
      <div className="flex flex-col items-center text-white">
        <div className="flex items-center gap-10 md:m-10 m-5 bg-gray-800 p-5 rounded-lg">
          <img
            className="md:w-60 w-32 rounded-full object-cover"
            src={profileImage}
            alt={name}
          />
          <div>
            <h1 className="pt-5 font-semibold  md:text-2xl text-lg">{name}</h1>
            {name2 && (<h1 className="font-semibold  md:text-2xl text-lg">{name2}</h1>
)}
            <div className="py-3">
                <h1 className="text-[#d9d9d9] md:text-xl text-sm md:max-w-[200px] max-w-[100px]">
                    {project}
                </h1>
            </div>
            <div className="md:text-lg text-sm md:max-w-[200px] max-w-[100px]">
                {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerProfile;
