"use client";

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full text-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between"></div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-normal">
        &copy; 2023 Santa Cruz Artificial Intelligence
      </Typography>
    </footer>
  );
};

export default Footer;
