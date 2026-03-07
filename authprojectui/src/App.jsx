import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import ProtectedRoute from "./sercurity/ProtectedRoute";
import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/productlist" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
