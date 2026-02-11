import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section data-aos="fade-up" id="contact" className="bg-white text-gray-900 py-20 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Contact <span className="text-amber-400">Support</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <Mail className="text-amber-400 mb-3" size={36} />
            <h3 className="font-semibold">Email</h3>
            <p>support@companydept.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="text-amber-400 mb-3" size={36} />
            <h3 className="font-semibold">Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-amber-400 mb-3" size={36} />
            <h3 className="font-semibold">Head Office</h3>
            <p>Dhule, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
