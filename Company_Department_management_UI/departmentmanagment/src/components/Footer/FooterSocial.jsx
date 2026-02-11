import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FooterSocial = () => {
  const socials = [
    { icon: <Facebook size={22} />, link: "#", label: "Facebook" },
    { icon: <Twitter size={22} />, link: "#", label: "Twitter" },
    { icon: <Instagram size={22} />, link: "#", label: "Instagram" },
    { icon: <Linkedin size={22} />, link: "#", label: "LinkedIn" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-amber-400 pl-3">
        Connect With Me
      </h3>
      <div className="flex gap-5">
        {socials.map((s, index) => (
          <a
            key={index}
            href={s.link}
            aria-label={s.label}
            className="hover:text-amber-400 transition transform hover:scale-110 duration-300"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Follow for updates and projects.
      </p>
    </div>
  );
};

export default FooterSocial;
