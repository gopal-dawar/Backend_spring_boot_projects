import React from "react";
import { Search } from "lucide-react";

const Searching = () => {
  return (
    <div className="flex items-center bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 gap-2 shadow-md">
      <input
        className="bg-transparent outline-none text-sm placeholder-gray-400 w-40"
        type="search"
        placeholder="Search here..."
      />
      <Search className="text-amber-400 cursor-pointer hover:text-amber-300 transition" />
    </div>
  );
};

export default Searching;
