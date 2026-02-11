import React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinkes";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <FooterBrand />
          <FooterLinks />
          <FooterSocial />
        </div>

        <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-amber-400 font-semibold">Syncify</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
