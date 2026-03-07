import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const re = await axios.get(`http://localhost:8080/expense`);
      setExpense(re.data);
    };
    fetchdata();
  }, []);

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:8080/expense/${id}`);
    setExpense(expense.filter((exp) => exp.id !== id));
  };

  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <div>
          <h1 className="text-center p-10 font-bold text-3xl">Expense List</h1>
          <button
            onClick={() => navigate("/")}
            className="absolute top-10 right-20 bg-green-700 px-3 py-1 text-white rounded"
          >
            Back
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-lg rounded p-6 w-1/2">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Lunch With Friends
            </h1>

            {expense.map((data) => {
              return (
                <div
                  key={data.id}
                  className="text-gray-700 pb-2 border-b flex justify-between"
                >
                  <ul>
                    <li className="flex justify-start gap-2">
                      <span className="font-medium">Amount:</span>
                      <span className="text-green-600 font-semibold">
                        ₹ {data.amount}
                      </span>
                    </li>

                    <li className="flex justify-start gap-2">
                      <span className="font-medium">Date:</span>
                      <span>{data.localDate}</span>
                    </li>
                  </ul>
                  <ul className="flex gap-2 justify-center items-center">
                    <li>
                      <button
                        onClick={() => navigate(`/updateexpense/${data.id}`)}
                        className="bg-green-400 px-2 py-1 text-white     rounded gap-2"
                      >
                        Update
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => deleteExpense(data.id)}
                        className="bg-red-400 text-white px-2 py-1 rounded gap-2"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
