import React from "react";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import AddExpense from "./component/AddExpense";
import ExpenseList from "./component/ExpenseList";
import UpdateExpense from "./component/UpdateExpense";
import ProtectedRouter from "./security/ProtectedRouter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/expenseList" element={<ExpenseList />} />
        <Route path="/updateexpense/:id" element={<UpdateExpense />} />
      </Routes>
    </>
  );
};

export default App;
