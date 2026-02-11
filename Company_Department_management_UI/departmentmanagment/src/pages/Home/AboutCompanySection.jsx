import React from "react";

const AboutCompanySection = () => {
  return (
    <section data-aos="fade-in" id="about" className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold text-amber-400 mb-6 border-l-4 border-amber-400 pl-4 inline-block">
          About Our Department Management System
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Our <span className="font-semibold text-white">Department Management System</span> 
          is a powerful platform that helps organizations handle internal departments and employees 
          more effectively. Designed with simplicity and performance in mind, it centralizes 
          all management operations in one place.
        </p>

        <div className="space-y-4 text-gray-400">
          <p>
            🏢 <span className="text-white font-semibold">Department Oversight:</span> 
            Easily add, modify, or remove departments while keeping all data synchronized.
          </p>

          <p>
            👥 <span className="text-white font-semibold">Employee Management:</span> 
            Track employee details, assign roles, and organize teams effortlessly.
          </p>

          <p>
            📊 <span className="text-white font-semibold">Analytics & Reports:</span> 
            Gain insights with real-time department data and performance metrics.
          </p>

          <p>
            🔒 <span className="text-white font-semibold">Security & Role Control:</span> 
            Maintain safe access through authentication and role-based permissions.
          </p>
        </div>

        <div className="mt-10">
          <button className="bg-amber-400 text-gray-900 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-amber-300 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
