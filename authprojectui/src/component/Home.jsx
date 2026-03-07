import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">Medicine Store</h1>

        <div className="space-x-6">
          <Link
            onClick={() => {
              sessionStorage.removeItem("authToken");
              navigate("/login");
            }}
            to="/login"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            Logout
          </Link>

          <Link
            to="/register"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-[80vh] text-white">
        <h2 className="text-5xl font-bold mb-6">Welcome to Medicine Store</h2>

        <p className="text-lg mb-8 w-[600px]">
          Buy medicines easily from our online medical store. Fast delivery,
          trusted medicines, and easy ordering system.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/addproduct")}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Add Product
          </button>

          <button
            onClick={() => navigate("/productlist")}
            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Product List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
