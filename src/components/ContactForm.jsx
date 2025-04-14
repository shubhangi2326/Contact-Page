
import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");

  const onSubmit = (event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center px-4">
      
      {/* LEFT SECTION - FORM */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* Top Buttons */}
        <div className="flex flex-wrap gap-3 justify-center p-4">
          <button className="bg-zinc-950 text-white px-5 py-3 flex items-center gap-2 rounded">
            <MdMessage />
            VIA SUPPORT CHAT
          </button>
          <button className="bg-zinc-950 text-white px-5 py-3 flex items-center gap-2 rounded">
            <IoCall />
            VIA CALL
          </button>
        </div>

        {/* Email Form Button */}
        <button className="border border-black text-black px-5 py-3 flex items-center gap-2 rounded mb-4">
          <MdMessage />
          VIA EMAIL FORM
        </button>

        {/* FORM */}
        <form className="w-full max-w-md px-4" onSubmit={onSubmit}>
          {/* NAME FIELD */}
          <div className="relative flex flex-col mb-4">
            <label
              htmlFor="name"
              className="absolute top-[-10px] left-[16px] bg-white px-1 text-sm"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="border border-black h-[48px] p-2 w-full"
            />
          </div>

          {/* EMAIL FIELD */}
          <div className="relative flex flex-col mb-4">
            <label
              htmlFor="email"
              className="absolute top-[-10px] left-[16px] bg-white px-1 text-sm"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="border border-black h-[48px] p-2 w-full"
            />
          </div>

          {/* TEXTAREA FIELD */}
          <div className="relative flex flex-col mb-4">
            <label
              htmlFor="text"
              className="absolute top-[-10px] left-[16px] bg-white px-1 text-sm"
            >
              Text
            </label>
            <textarea
              id="text"
              placeholder="Enter Text"
              className="border border-black h-[100px] p-2 w-full"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end">
            <button type = "submit" className= "bg-black text-white px-6 py-2 rounded">
              Submit
            </button>
            <div className="mt-4 text-left space-y-2">
  <p><strong>Name:</strong> {name}</p>
  <p><strong>Email:</strong> {email}</p>
  <p><strong>Message:</strong> {text}</p>
</div>

</div>
 
        </form>

      </div>

      {/* RIGHT SECTION - IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src="/images/contact.svg"
          alt="Contact Us"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default ContactForm;
