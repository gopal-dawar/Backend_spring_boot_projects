import React from "react";
import { Link } from "react-router-dom";

const Nav2 = () => {
  return (
    <ul className="flex gap-5">
      {/* Home link */}
      <li>
        <Link
          to="/"
          className="text-white text-lg px-3 py-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
        >
          Home
        </Link>
      </li>

      {/* These use href because they scroll to sections on the same page */}
      <li>
        <a
          href="#service"
          className="text-white text-lg px-3 py-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
        >
          Service
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="text-white text-lg px-3 py-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-white text-lg px-3 py-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
        >
          Contact
        </a>
      </li>

      {/* Dashboard link goes to dashboard route */}
      <li>
        <Link
          to="/dashboard"
          className="text-white text-lg px-3 py-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );
};

export default Nav2;
