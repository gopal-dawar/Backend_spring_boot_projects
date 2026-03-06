import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaIdBadge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/register",
        formData,
      );

      alert("User Registered Successfully");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border rounded mb-4 px-3">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full p-2 outline-none"
              required
            />
          </div>

          {/* Name */}
          <div className="flex items-center border rounded mb-4 px-3">
            <FaIdBadge className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-2 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded mb-4 px-3">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-2 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded mb-6 px-3">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 outline-none"
              required
            />
          </div>

          <p className="text-sm text-center mb-4">
            Already have Account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              login
            </span>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
