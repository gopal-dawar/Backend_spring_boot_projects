import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/login", formData);
      if (!res.data.authToken) {
        alert("Invalid Username or Password!");
        setFormData({
          username: "",
          password: "",
        });
      } else {
        sessionStorage.setItem("authToken", res.data.authToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Login Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center border rounded mb-4 px-3">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full p-2 outline-none"
              required
            />
          </div>

          <div className="flex items-center border rounded mb-4 px-3">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 outline-none"
              required
            />
          </div>

          <p className="text-sm text-center mb-4">
            New Account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
