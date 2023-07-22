import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AuthRoute from '@/components/AuthRoute';
import GuestRoute from '@/components/GuestRoute';
import { useGetCurrentUserQuery } from '@/features/auth/authApi';
import { updateCurrentUser } from '@/features/auth/authSlice';
import Login from '@/pages/Auth/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import OrderApproval from '@/pages/Orders/Approval/OrderApproval';
import OrderCreate from '@/pages/Orders/CreateNew/OrderCreate';
import PageNotFound from '@/pages/PageNotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const { isLoading, error } = useGetCurrentUserQuery(undefined, {
        skip: !localStorage.getItem('token'),
    });

    useEffect(() => {
        if (error?.status === 401) {
            localStorage.removeItem('token');
            dispatch(updateCurrentUser(null));
        }
    }, [error, dispatch]);

    if (isLoading) {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center">
                Loading...
            </div>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/features/users/dashboard" />} />
                <Route
                    path="/login"
                    element={
                        <GuestRoute>
                            <Login />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/features/users/dashboard"
                    element={
                        <AuthRoute>
                            <Dashboard />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/features/local_sales/sales_order"
                    element={
                        <AuthRoute>
                            <OrderCreate />
                        </AuthRoute>
                    }
                />

                <Route
                    path="/features/local_sales/order_approval"
                    element={
                        <AuthRoute>
                            <OrderApproval />
                        </AuthRoute>
                    }
                />
                {/* page not found */}
                <Route
                    path="*"
                    element={
                        <AuthRoute>
                            <PageNotFound />
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
