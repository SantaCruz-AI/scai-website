"use client"

import React, { useState } from "react";

const NewsLetter = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async (event :any) => {
        event.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                receiver: event.target[0].value
            })
        });

        setEmail('');
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className=" col-span-2 sm:col-span-1 mx rounded-md border-r-2 border-b-2  p-2 ">
                    <label className="pb-4 ">
                        <h1 className="text-3xl font-bold uppercase mb-2">Newsletter:</h1>
                        <p className="text-md text-gray-600 indent-5">Join our newsletter! <span className="">get reminders of events</span></p>
                        <input required value={email}  onChange={(e) => (setEmail(e.target.value))} id="email" className=" m-4 p-2 rounded-lg border-r-2 border-l-2 border-b-2 " type="email" name="email" placeholder="email$%#"/>
                    </label>
                    <input className="text-black uppercase font-bold opacity-90 px-3 rounded-md m-2 p-2 text-xl border-r-2 border-b-2 hover:border hover:bg-gray-100" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default NewsLetter;