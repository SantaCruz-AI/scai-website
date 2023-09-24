import Box from "@/components/Box";
import Background from "@/components/Background";
import ScaiLogo from "@/components/ScaiLogo";
import NewsletterButton from "@/components/NewsletterButton";
import Officers from "@/components/Officers";
import CustomTimeline from "@/components/CustomTimeline";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Background />

        <div className="pt-[140px] flex-col md:flex md:flex-row  justify-center w-full items-center absolute top-0 z-11">
          <div className=" sm:order-1 md:order-2">
            <ScaiLogo />
          </div>
          <div className="flex flex-col md:items-start px-10 items-center text-white sm:order-2 md:order-1">
            <h1 className="pb-5  font-semibold md:text-6xl text-4xl">
              Welcome to{" "}
              <span className=" bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                SCAI
              </span>
            </h1>
            <div className="sans text-[#93989D] md:text-base text-sm flex max-w-md gap-4 font-semi pb-5">
              <h1>
                UCSC's leading AI Club to discover Machine Learning & Artificial
                Intelligence through engaging lectures, projects, and expert
                talks.{" "}
              </h1>
            </div>
            <NewsletterButton />
          </div>
        </div>
        <CustomTimeline />
        <Officers />
      </div>
    </div>
  );
}
