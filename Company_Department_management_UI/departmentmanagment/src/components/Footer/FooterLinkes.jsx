import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-amber-400 pl-3">
        Quick Links
      </h3>
      <ul className="space-y-2">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="hover:text-amber-400 transition duration-300 text-gray-400"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
