import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import NavBar from "@/components/NavBar";
import Image from "next/image";

import ScaiLogo from "@/components/ScaiLogo";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCSC Artificial Intelligence",
  description: "SCAI Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;900&display=swap"
        rel="stylesheet"
      />
      <body className={font.className}>
        <div className="">
          <NavBar />
          <div className=" pt-28 flex flex-row absolute w-screen h-5/6 bg-[url('/scai-header.jpg')]">
            <div className="w-1/2 h-full flex justify-center">
              <div className="text-center my-auto h-fit pb-36">
                <h1 className="text-5xl text-blue-700 font-bold">Welcom To UCSC AI Club </h1>
                <h2 className="text-2xl text-white">a;lskdfj asdl;kfjasd;lkf dkfjdkfj dfkj </h2>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <ScaiLogo/>
            </div>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
