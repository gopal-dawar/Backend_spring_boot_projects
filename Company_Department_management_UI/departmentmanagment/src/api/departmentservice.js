import axios from "axios";

const BASE_URL = "http://localhost:8080/department";

// ✅ Get all departments
export const getAllDepartments = () => axios.get(`${BASE_URL}/getAllData`);

// ✅ Add a new department
export const addDepartment = (department) =>
  axios.post(`${BASE_URL}/add`, department);

// ✅ Update an existing department
export const updateDepartment = (id, department) =>
  axios.put(`${BASE_URL}/update/${id}`, department);

// ✅ Delete department by ID
export const deleteDepartment = (id) =>
  axios.delete(`${BASE_URL}/deleteById/${id}`);

export const getCount = (id) => axios.get(`${BASE_URL}/count/${id}`);
