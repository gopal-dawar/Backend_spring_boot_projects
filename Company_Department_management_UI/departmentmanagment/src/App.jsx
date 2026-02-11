import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

// Dashboard Components
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import StatsCards from "./components/Dashboard/StatsCards";
import EmployeePage from "./components/Dashboard/employees/EmployeePage";
import DepartmentPage from "./components/Dashboard/departments/DepartmentPage";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          🌐 Public route
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<StatsCards />} />

            <Route path="employees" element={<EmployeePage />} />
            <Route path="departments" element={<DepartmentPage />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
