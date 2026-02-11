import React from "react";
import { LayoutDashboard, Users, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Employees", path: "/dashboard/employees", icon: <Users size={20} /> },
    { name: "Departments", path: "/dashboard/departments", icon: <Layers size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col p-6">
      <h2 className="text-2xl font-bold text-amber-400 mb-8">Gopal Dawar</h2>

      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-amber-400 hover:text-gray-900 transition"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
