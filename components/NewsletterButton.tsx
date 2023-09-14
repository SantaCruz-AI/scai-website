"use client";
//fe8acbebd22a2e6aa81287f195d4ce42-us8
import React, { FC, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThemeProvider, Button } from "@material-tailwind/react";

interface Modal {
  visible: boolean;
  onClose: any;
}

const MyModal: FC<Modal> = (props) => {
  const [email, setEmail] = useState("");

  const makeApiCall = async () => {
    const response = await fetch("/api/example", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });

    const body = await response.json();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    makeApiCall();
    setEmail("");
  };

  if (!props.visible) return null;

  return (
    <div className="sans fixed inset-0 z-30 text-black bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="p-10 bg-white rounded-lg relative">
        <button
          onClick={props.onClose}
          className="absolute w-8 h-8 translate-x-3 -translate-y-3 top-0 right-0 bg-white text-neutral-700 hover:text-neutral-900 text-md rounded-full "
        >
          X
        </button>
        <h1 className=" text-2xl">SCAI Newsletter</h1>
        <p>Stay up to date with the latest club activitys. </p>
        <p>(We don't spam!)</p>

        <form className="w-full mt-6" onSubmit={handleSubmit}>
          <input
            required
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border m-1 p-1 rounded-lg"
            placeholder="example@gmail.com"
          ></input>
          <button
            type="submit"
            className="rounded-lg bg-yellow-300 w-fit h-full p-1 hover:border border-neutral-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const NewsletterButton = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div>
      <button
        className="bg-white hover:bg-gray-100 rounded-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
        onClick={() => setShowMyModal(true)}
      >
        <h1 className="flex items-center">
          Join Our Newsletter!
          <MdKeyboardArrowRight className="ml-2" />
        </h1>
      </button>
      <MyModal visible={showMyModal} onClose={handleOnClose} />
    </div>
  );
};

export default NewsletterButton;
