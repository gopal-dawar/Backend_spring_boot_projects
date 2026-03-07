import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    expenseName: "",
    amount: 0,
    localDate: "",
    description: "",
  });

  const formhandling = async (e) => {
    e.preventDefault();
    try {
      console.log(expense);

      await axios.post(`http://localhost:8080/expense/save`, expense);

      setExpense({
        expenseName: "",
        amount: 0,
        localDate: "",
        description: "",
      });

      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="h-screen bg-gray-200  py-20 w-full flex justify-center items-center">
        <button
          onClick={() => navigate("/")}
          className="absolute top-10 right-20 bg-green-700 px-3 py-1 text-white rounded"
        >
          Back
        </button>
        <form onSubmit={formhandling} className="w-90  bg-white p-5 rounded">
          <h1 className="text-center py-5 text-2xl font-bold">Add Expense</h1>

          <div className="flex flex-col py-2 gap-1">
            <label>Expense Name</label>
            <input
              value={expense.expenseName}
              onChange={(e) =>
                setExpense({ ...expense, expenseName: e.target.value })
              }
              type="text"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Amount</label>
            <input
              value={expense.amount}
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
              type="number"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Date</label>
            <input
              value={expense.localDate}
              onChange={(e) =>
                setExpense({ ...expense, localDate: e.target.value })
              }
              type="date"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Description</label>
            <textarea
              value={expense.description}
              onChange={(e) =>
                setExpense({ ...expense, description: e.target.value })
              }
              type="text"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            ></textarea>
          </div>
          <button className="w-full outline-0 active:scale-90 bg-green-700 py-2 rounded mt-3 text-white">
            Add Expenses
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
