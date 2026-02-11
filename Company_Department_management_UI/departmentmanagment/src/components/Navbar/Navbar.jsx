import React from "react";
import Nav2 from "./Nav2";
import Searching from "./Searching";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-3 bg-gray-900 shadow-lg">
      {/* Logo / Brand Name */}
      <a href="#" className="font-extrabold text-3xl text-amber-400">
        Syncify
      </a>

      {/* Navigation Links */}
      <Nav2 />

      {/* Search Bar */}
      <Searching />
    </div>
  );
};

export default Navbar;
