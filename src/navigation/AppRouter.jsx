import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Auth/Login';

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route
                    path="/features/users/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
