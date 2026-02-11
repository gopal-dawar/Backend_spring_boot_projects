import React from "react";
import { Users, Layers, Database, FileSpreadsheet } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Users size={40} />,
      title: "Employee Management",
      desc: "Add, view, update, and remove employees with ease using our CRUD interface.",
    },
    {
      icon: <Layers size={40} />,
      title: "Department Tracking",
      desc: "Manage company departments and assign employees efficiently to improve structure.",
    },
    {
      icon: <Database size={40} />,
      title: "Data Integration",
      desc: "All data securely stored in MySQL with smooth connection between backend and frontend.",
    },
    {
      icon: <FileSpreadsheet size={40} />,
      title: "Reports & Analytics",
      desc: "Generate real-time reports on employees and departments for smarter decisions.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        System <span className="text-amber-400">Features</span>
      </h2>

      {/* ✅ Added subtitle below heading */}
      <p className="text-gray-600 text-lg mt-4 mb-12 max-w-3xl mx-auto">
        Explore the powerful capabilities of our Department Management System
        designed to simplify operations, enhance efficiency, and empower
        administrators to make data-driven decisions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md p-6 rounded-xl hover:shadow-xl transition"
          >
            <div className="text-amber-400 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
