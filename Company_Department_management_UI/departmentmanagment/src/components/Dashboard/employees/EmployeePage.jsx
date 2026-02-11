import React, { useState, useEffect } from "react";
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../../api/employeeservice";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    ename: "",
    address: "",
    age: "",
    gender: "",
    mobileno: "",
    position: "",
    salary: "",
    department_id: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in employeeData) {
      if (!employeeData[key]) return alert("Please fill all fields");
    }

    const payload = {
      ename: employeeData.ename,
      address: employeeData.address,
      age: parseInt(employeeData.age),
      gender: employeeData.gender,
      mobileno: employeeData.mobileno,
      position: employeeData.position,
      salary: parseFloat(employeeData.salary),
      department: { id: parseInt(employeeData.department_id) },
    };

    if (editId) {
      updateEmployee(editId, payload)
        .then((res) => {
          setEmployees(
            employees.map((emp) => (emp.id === editId ? res.data : emp))
          );
          setEditId(null);
          setShowForm(false);
          setEmployeeData({
            ename: "",
            address: "",
            age: "",
            gender: "",
            mobileno: "",
            position: "",
            salary: "",
            department_id: "",
          });
        })
        .catch((err) => console.error("Error updating employee:", err));
    } else {
      addEmployee(payload)
        .then(() => {
          getAllEmployees().then((res) => setEmployees(res.data));
          setShowForm(false);
          setEmployeeData({
            ename: "",
            address: "",
            age: "",
            gender: "",
            mobileno: "",
            position: "",
            salary: "",
            department_id: "",
          });
        })
        .catch((err) => console.error("Error adding employee:", err));
    }
  };

  const handleEdit = (emp) => {
    setEmployeeData({
      ename: emp.ename,
      address: emp.address,
      age: emp.age,
      gender: emp.gender,
      mobileno: emp.mobileno,
      position: emp.position,
      salary: emp.salary,
      department_id: emp.department ? emp.department.id : "",
    });
    setEditId(emp.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
        .then(() => {
          setEmployees(employees.filter((emp) => emp.id !== id));
        })
        .catch((err) => console.error("Error deleting employee:", err));
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        <span className="text-amber-500">Employee</span> Management
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Employee List</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditId(null);
              setEmployeeData({
                ename: "",
                address: "",
                age: "",
                gender: "",
                mobileno: "",
                position: "",
                salary: "",
                department_id: "",
              });
            }}
            className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition"
          >
            {showForm ? "Close" : "+ Add Employee"}
          </button>
        </div>

        {/* Add/Edit Employee Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-6 bg-gray-50 p-4 rounded-lg border space-y-3"
          >
            <input
              type="text"
              name="ename"
              placeholder="Employee Name"
              value={employeeData.ename}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, ename: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={employeeData.address}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, address: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={employeeData.age}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, age: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <select
              name="gender"
              value={employeeData.gender}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, gender: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              name="mobileno"
              placeholder="Mobile No"
              value={employeeData.mobileno}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, mobileno: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={employeeData.position}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, position: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={employeeData.salary}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, salary: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="number"
              name="department_id"
              placeholder="Department ID"
              value={employeeData.department_id}
              onChange={(e) =>
                setEmployeeData({
                  ...employeeData,
                  department_id: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition w-full"
            >
              {editId ? "Update" : "Add Employee"}
            </button>
          </form>
        )}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Gender</th>
              <th className="p-2 text-left">Mobile No</th>
              <th className="p-2 text-left">Position</th>
              <th className="p-2 text-left">Salary</th>
              <th className="p-2 text-left">Department ID</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp , idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition text-gray-600"
              >
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{emp.ename}</td>
                <td className="p-2">{emp.address}</td>
                <td className="p-2">{emp.age}</td>
                <td className="p-2">{emp.gender}</td>
                <td className="p-2">{emp.mobileno}</td>
                <td className="p-2">{emp.position}</td>
                <td className="p-2">{emp.salary}</td>
                <td className="p-2">{emp.department_id}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {employees.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center p-4 text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeePage;
