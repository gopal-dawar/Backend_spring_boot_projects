import React, { useState, useEffect } from "react";
import {
  getAllDepartments,
  addDepartment,
  deleteDepartment,
} from "../../../api/departmentservice";

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response.data);
      const depdata = response.data;
      const counts = depdata.map((de) => de.employees.length);
     console.log(counts);
     
      
      setEmployeeCount(counts);
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert("Failed to load departments!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!departmentName.trim()) {
      alert("Please enter a department name");
      return;
    }

    try {
      const newDepartment = { dname: departmentName };
      await addDepartment(newDepartment);
      alert("Department added successfully!");
      fetchDepartments();
      setDepartmentName("");
      setShowForm(false);
    } catch (error) {
      console.error("Error adding department:", error);
      alert("Failed to save department!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        await deleteDepartment(id);
        alert("Department deleted successfully!");
        fetchDepartments();
      } catch (error) {
        console.error("Error deleting department:", error);
        alert("Failed to delete department!");
      }
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        <span className="text-amber-500">Department</span> Management
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Department List
          </h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setDepartmentName("");
            }}
            className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition"
          >
            {showForm ? "Close" : "+ Add Department"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-6 bg-gray-50 p-4 rounded-lg border"
          >
            <label className="block text-gray-700 font-medium mb-2">
              Department Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                placeholder="Enter department name"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition"
              >
                Add
              </button>
            </div>
          </form>
        )}

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Department Name</th>
              <th className="p-2 text-left">Employees</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dep, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition text-gray-600"
              >
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{dep.dname || dep.name}</td>
                <td className="p-2">{employeeCount}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(dep.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {departments.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center p-4 text-gray-500">
                  No departments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DepartmentPage;
