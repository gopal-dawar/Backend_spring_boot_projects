import React from "react";
import { ClipboardList, Users2, BarChart2, ShieldCheck } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <ClipboardList size={40} />,
      title: "Department Management",
      desc: "Easily create, update, and manage all company departments with secure data handling.",
    },
    {
      icon: <Users2 size={40} />,
      title: "Employee Management",
      desc: "Assign employees to departments, track their roles, and manage information efficiently.",
    },
    {
      icon: <BarChart2 size={40} />,
      title: "Analytics Dashboard",
      desc: "View real-time department and employee statistics to make data-driven decisions.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Access Control & Security",
      desc: "Ensure system safety with user authentication and role-based access management.",
    },
  ];

  return (
    <section data-aos="fade-up" id="service" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our <span className="text-amber-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-amber-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
