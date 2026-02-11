import React, { useState, useEffect } from "react";
import { Users, Layers, BarChart3, ShieldCheck } from "lucide-react";
import { getAllEmployees } from "../../api/employeeservice";
import { getAllDepartments } from "../../api/departmentservice";

const StatsCards = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);

  useEffect(() => {
    fetchStats();

    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const empRes = await getAllEmployees();
      const employees = empRes.data;
      setTotalEmployees(employees.length);

      const depRes = await getAllDepartments();
      const departments = depRes.data;
      setTotalDepartments(departments.length);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  const data = [
    {
      title: "Total Employees",
      value: totalEmployees,
      icon: <Users size={28} />,
      color: "bg-amber-100 text-amber-500",
    },
    {
      title: "Departments",
      value: totalDepartments,
      icon: <Layers size={28} />,
      color: "bg-green-100 text-green-500",
    },
    {
      title: "Active Projects",
      value: 18,
      icon: <BarChart3 size={28} />,
      color: "bg-blue-100 text-blue-500",
    },
    {
      title: "System Uptime",
      value: "99.9%",
      icon: <ShieldCheck size={28} />,
      color: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard <span className="text-amber-500">Overview</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm text-gray-500">{item.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {item.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${item.color}`}>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;
