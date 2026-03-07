import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {

  const authToken = sessionStorage.getItem("authToken");
  
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRouter;
