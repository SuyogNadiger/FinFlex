// src/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase/firebase'; // Update the import path as necessary
import { useAuthState } from 'react-firebase-hooks/auth'; // Install this if needed

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // You can show a loader here if needed
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
