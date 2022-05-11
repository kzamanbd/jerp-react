import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import AppLayout from 'components/AppLayout';

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <AppLayout>{children}</AppLayout> : <Navigate to="/login" />;
}
