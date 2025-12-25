import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check the flag we saved during login
  const isAuthenticated = localStorage.getItem("isAdminLoggedIn") === "true";

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the child routes (Dashboard)
  return <Outlet />;
};

export default ProtectedRoute;