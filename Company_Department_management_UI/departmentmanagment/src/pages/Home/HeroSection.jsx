import React from "react";
import { Building2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-10 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-400">
            Company Department Management System
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            Streamline your company’s workflow with an easy-to-use management
            system to handle departments, employees, and data efficiently.
          </p>
          <button className="bg-amber-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-amber-300 transition">
            Get Started
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/view-graphic-3d-building_23-2150849113.jpg?t=st=1762838352~exp=1762841952~hmac=ed430757115a23aff1f34c8042f5c37246a3402748f0ba468201057168752f39&w=1060"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
