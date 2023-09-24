"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  AiFillHome,
  AiFillSchedule,
  AiFillContacts,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsDiscord, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

const Navbar: React.FC = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  const scrollToSection = (sectionRef:any) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop-95,
      behavior: 'smooth',
    });
  }

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
          <div className=" pl-11 w-full flex space-x-10 font-montserrat justify-center">
            <h1 onClick={scrollToTop} className="cursor-pointer hover:text-amber-400 hover:opacity-100">Home</h1>
            <h1 onClick={() => {scrollToSection(props.scheduleRef)}} className="cursor-pointer first-line:hover:text-amber-400 hover:opacity-100">Schedule</h1>
            {/* <h1 className="hover:text-amber-400 hover:opacity-100">Projects</h1> */}
            <h1 onClick={() => {scrollToSection(props.officersRef)}} className="cursor-pointer hover:text-amber-400 hover:opacity-100">Officers</h1>
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
        className={`fixed top-0 right-0 bg-white h-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5 transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleNavbar}
          className="text-4xl absolute top-6 right-4 "
        >
          <IoMdClose className="text-black" />
        </button>

        <div className="h-[calc(100vh-2rem)] p-4">
          <div className="mb-2 p-4">
           <h1 className=" font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Santa Cruz AI
              </h1>
          </div>

          <List>
            <ListItem onClick={scrollToTop}>
              <ListItemPrefix>
                <AiFillHome className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
            <ListItem onClick={() => {scrollToSection(props.scheduleRef)}}>
              <ListItemPrefix>
                <AiFillSchedule className="h-5 w-5" />
              </ListItemPrefix>
              Schedule
            </ListItem>
            {/* <ListItem>
              <ListItemPrefix>
                <BiCodeAlt className="h-5 w-5" />
              </ListItemPrefix>
              Projects
            </ListItem> */}
            <ListItem onClick={() => {scrollToSection(props.officersRef)}}>
              <ListItemPrefix>
                <FaPeopleGroup className="h-5 w-5" />
              </ListItemPrefix>
              Officers
            </ListItem>

            <div className="pt-10">
              <ListItem className="flex items-center">
                <ListItemPrefix>
                  <Link
                    href="https://discord.gg/santacruzai"
                    target="blank"
                    className="w-8 "
                  >
                    <img src="discord.png" alt="Discord Server" />
                  </Link>
                </ListItemPrefix>
                <span className="mr-2">Discord</span>
                <MdKeyboardArrowRight />
              </ListItem>

              <ListItem className="flex items-center">
                <ListItemPrefix>
                  <Link
                    href="https://instagram.com/ucscai?igshid=MzRlODBiNWFlZA=="
                    target="blank"
                  >
                    <img
                      src="instagram.png"
                      alt="Instagram Page"
                      className="w-8"
                    />
                  </Link>
                </ListItemPrefix>
                <span className="mr-2">Instagram</span>
                <MdKeyboardArrowRight />
              </ListItem>

              <ListItem className="flex items-center">
                <ListItemPrefix>
                  <Link
                    href="https://www.linkedin.com/company/santa-cruz-artificial-intelligence/"
                    target="blank"
                  >
                    <img
                      src="linkedin.png"
                      alt="UCSC AI Club Linkedin Profile"
                      className="w-8"
                    />
                  </Link>
                </ListItemPrefix>
                <span className="mr-2">Linkedin</span>
                <MdKeyboardArrowRight />
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
