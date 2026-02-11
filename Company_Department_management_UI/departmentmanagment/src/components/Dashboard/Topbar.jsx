import React from "react";
import { Search, Bell, User } from "lucide-react";

const Topbar = () => {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-6 py-3">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        <button className="relative hover:text-amber-400 transition">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer hover:text-amber-400 transition">
          <User size={20} />
          <span className="text-sm font-medium">Gopal Dawar</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
