import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Auth/Login';
import PageNotFound from '../pages/PageNotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/features/users/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                {/* page not found */}
                <Route
                    path="*"
                    element={
                        <PrivateRoute>
                            <PageNotFound />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
