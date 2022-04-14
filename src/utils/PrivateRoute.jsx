import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const isLoggedIn = false;
    return isLoggedIn ? children : <Navigate to="/login" />;
}
