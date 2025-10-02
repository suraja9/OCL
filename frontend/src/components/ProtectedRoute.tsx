import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  
  // Check if user is authenticated by looking for officeAuth in localStorage
  const isAuthenticated = () => {
    const authData = localStorage.getItem('officeAuth');
    return authData !== null;
  };

  if (!isAuthenticated()) {
    // Redirect to office login page if not authenticated
    return <Navigate to="/office" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
