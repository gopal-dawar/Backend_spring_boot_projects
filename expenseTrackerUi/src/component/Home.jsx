import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-200 w-full flex flex-col items-center  pt-10 h-screen">
        <div className="flex flex-col gap-5 bg-white w-4/5 py-10  text-center">
          <h1 className="text-2xl font-bold">Welcome to Expense Tracker</h1>
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => navigate("/addexpense")}
              className="border px-3 bg-blue-500 rounded text-white outline-0 active:scale-90 py-1"
            >
              Add Expense
            </button>
            <button
              onClick={() => navigate("/expenseList")}
              className="border px-3 bg-blue-500 rounded text-white outline-0 active:scale-90 py-1"
            >
              Expense List
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("authToken");
                navigate("/login");
              }}
              className="border px-3 bg-gray-500 rounded text-white outline-0 active:scale-90 py-1"
            >
              Logout
            </button>
          </div>
          <p>
            Track and manage your expenses effectively. Use the navigation links
            to add new expenses or view your expense history
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
