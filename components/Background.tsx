import { Tab } from "@material-tailwind/react";
import NewsletterButton from "./NewsletterButton";

const Background = () => {
  
    return (
      <div className="flex h-[800px] relative z-0 ">
        <img
          src="scai-header-crop.jpg"
          alt="UCSC Aerial View"
          className="inset-0 object-cover w-full h-full absolute z-0"
        />

        <div className="flex flex-row justify-center gap-4 bg-red-500 bg-opacity-50 pt-28 pb-20 px-4 h-full w-full z-10">
          <div className="w-full h-full rounded-lg">
            <div className=" flex flex-col justify-center gap-4 m-auto w-fit h-fit">
              <h1 className="text-5xl font-bold text-white">Our <span className="text-blue-500">Mission.</span></h1>
              <p className="text-white w-96 text-lg">UCSC's top Machine Learning and AI Club aims to teach the basics of Machine Learning to a diverse audience through lectures, projects, and guest speakers. Join our community and explore the AI world with us!</p>
              <NewsletterButton/>
            </div>
            
          </div>
          <div className="w-full h-full bg-white rounded-lg">
2
          </div>
        </div>
      </div>
    );
  };
  
  export default Background;