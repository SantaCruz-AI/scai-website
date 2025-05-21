"use client";

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full text-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between"></div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-normal">
        &copy; 2024 Santa Cruz Artificial Intelligence
      </Typography>
      <Typography className="text-center font-normal">
      This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters.
      </Typography>
    </footer>
  );
};

export default Footer;
