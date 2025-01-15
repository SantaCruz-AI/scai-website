import Navbar from "../../../components/NavBar";
import ProfileCard from "@/components/ProfileCard";

const speakers = () => {
  return (
    <div>
      <Navbar />

      <h1 className="bg-gradient-to-b pt-24 from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent text-center  px-3 md:px-20 mt-10 font-semibold text-6xl pb-5">
        Speakers
      </h1>

        
      {<div className="flex flex-wrap md:gap-20 justify-center max-w-[1300px] mx-auto">
        <ProfileCard
          profileImage="profilePics/Speakers/Jason-Eshrag.jpeg"
          name="Dr. Jason Eshragian"
          role="Neuromorphic Computing"
          date="November 20th"
          linkedin="https://www.linkedin.com/in/jason-eshraghian-9a49497a/"
        />
        {/* <ProfileCard
          profileImage="profilePics/Speakers/janesh.jpeg"
          name="Janesh Chhabra"
          role="Senior Software Engineer at AWS"
          date="October 26th"
          linkedin="https://www.linkedin.com/in/janeshchhabra/"
        />
        <ProfileCard
          profileImage="profilePics/Speakers/kumar.jpeg"
          name="Kumar Chivukula"
          role="Co-Founder and CEO of Opsera"
          linkedin="https://www.linkedin.com/in/kumar-chivukula/"
          date="November 16th"
        />
        <ProfileCard
          profileImage="profilePics/Speakers/alexander.jpeg"
          name="Alexander Lerch"
          role="Professor at Georgia Tech"
          linkedin="https://www.linkedin.com/in/lerch/"
          date="November 30th"
        />  */}
      </div> }
    </div>
  );
};

export default speakers;
