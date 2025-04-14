// import React from "react";
// import { MdMessage } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// const ContactForm = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row  min-h-screen justify-center items-center md:w-full w-[50%]">
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
//           <div className="flex flex-wrap gap-2 p-2">
//             <button className="bg-zinc-950 text-white px-5 py-3 flex justify-center items-center gap-2 rounded">
//               <MdMessage /> VIA SUPPORT CHAT VIA
//             </button>
//             <button className="bg-zinc-950 text-white  ms-2 px-5 flex justify-center items-center gap-2 rounded">
//               <IoCall />
//               VIA CALL
//             </button>
           
//           </div>
//           <button className=" text-black  border border-black ms-2 px-5 flex justify-center items-center gap-2 rounded w-[40%] py-3">
//           <MdMessage />       
//                  VIA EMAIL FORM
//             </button>
//             <form className="w-[50%] pt-3">
                
//                   <div className="relative flex p-2 w-[20%]bg-blue-500">
//                         <label htmlFor="name" className="absolute top-0 left-[30px] bg-white" >Name</label>
//                     <input type="text"  placeholder="Enter Name" className="border border-black h-[48px] p-[8px] w-[100%] "/>
//                   </div>
                 
//                   <div className="relative flex    p-2 w-[20%]bg-blue-500">
//                         <label htmlFor="name" className="absolute top-0 left-[30px] bg-white" >Email</label>
//                     <input type="text"  placeholder="Enter Email" className="border border-black h-[48px] p-[8px] w-[100%] "/>
//                   </div>
                  
//                   <div className="relative flex    p-2 w-[20%]bg-blue-500">
//                         <label htmlFor="name" className="absolute top-0 left-[30px] bg-white" >Text</label>
//                     <textarea type="text"  placeholder="Enter Text" className="border border-black h-[48px] p-[8px] w-[100%] "/>
//                   </div>

//                   <div className="flex justify-end ">
//                   <button className=" bg-black text-white py-2 px-4 p-3 rounded">     
//                 Submit
//             </button>
//                   </div>
//             </form> 
//         </div>
//         <div className="w-[50%] flex justify-center items-center">
//             <img src="/images/contact.svg" className="p-4" alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;


import React from "react";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
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
        <form className="w-full max-w-md px-4">
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
            <button className="bg-black text-white px-6 py-2 rounded">
              Submit
            </button>
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
