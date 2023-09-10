"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white sticky top-0 z-[20] absolute w-screen">
      <div
        className="... backdrop-filter backdrop-blur-lg bg-opacity-30 
     border-b  flex items-center w-full px-5 py-5 justify-between
     fixed"
      >
        <div className="flex items-center">
          <img src="scailogo.png" alt="" className="h-[50px] pr-3" />
          <h1 className="font-montserrat font-bold text-4xl">SCAI.</h1>
        </div>

        <div className="hidden md:flex items-center w-full">
          <div className=" w-full flex space-x-10 font-montserrat justify-center">
            <h1 className="hover:text-amber-400 hover:opacity-100">Home</h1>
            <h1 className="hover:text-amber-400 hover:opacity-100">Schedule</h1>
            <h1 className="hover:text-amber-400 hover:opacity-100">
              Newsletter
            </h1>
            <h1 className="hover:text-amber-400 hover:opacity-100">Contact</h1>
            <h1 className="hover:text-amber-400 hover:opacity-100">Projects</h1>
            <h1 className="hover:text-amber-400 hover:opacity-100">Officers</h1>
          </div>

          <div className="flex px-5 h-10 space-x-3">
            <Link href="https://discord.gg/santacruzai" target="blank">
              <img src="discord.png" alt="Discord Server" />
            </Link>
            <Link
              href="https://instagram.com/ucscai?igshid=MzRlODBiNWFlZA=="
              target="blank"
            >
              <img src="instagram.png" alt="Instagram Page" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/santa-cruz-artificial-intelligence/"
              target="blank"
            >
              <img src="linkedin.png" alt="UCSC AI Club Linkedin Profile" />
            </Link>
          </div>
        </div>

        <div className="md:hidden text-4xl">
          <button>
            <GiHamburgerMenu onClick={toggleNavbar} />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-200  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <button
          onClick={toggleNavbar}
          className="text-4xl absolute top-6 right-4"
        >
          <IoMdClose />
        </button>
        <ul className=" flex flex-col text-center pt-[80px] font-montserrat space-y-5 ">
          <li>Home</li>
          <li>Schedule</li>
          <li>Newsletter</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>Officers</li>
          <div className="flex flex-col items-center space-y-5">
            <li>
              <Link href="https://discord.gg/santacruzai" target="blank">
                <img src="discord.png" alt="Discord Server" />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://instagram.com/ucscai?igshid=MzRlODBiNWFlZA=="
                target="blank"
              >
                <img src="instagram.png" alt="Instagram Page" />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://www.linkedin.com/company/santa-cruz-artificial-intelligence/"
                target="blank"
              >
                <img src="linkedin.png" alt="UCSC AI Club Linkedin Profile" />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
