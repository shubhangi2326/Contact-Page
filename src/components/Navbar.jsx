import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links (visible on medium and up) */}
        <ul className="hidden md:flex gap-7 font-semibold text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Contact Us</li>
        </ul>

        {/* Optional: Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </nav>

      {/* Spacer to push content below the fixed navbar */}
      <div className="h-[72px] md:h-[80px]"></div>
    </>
  );
};

export default Navbar;
