import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import BlankLayout from '../components/BlankLayout';

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? (
        <Navigate to="/features/users/dashboard" />
    ) : (
        <BlankLayout>{children}</BlankLayout>
    );
}
