import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

export const getAllEmployees = () => axios.get(`${BASE_URL}/getAllData`);

export const getEmployeeById = (id) => axios.get(`${BASE_URL}/getById/${id}`);


export const addEmployee = (employee) =>
  axios.post(`${BASE_URL}/add`, employee);

export const updateEmployee = (id, employee) =>
  axios.put(`${BASE_URL}/update/${id}`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${BASE_URL}/deleteById/${id}`);
