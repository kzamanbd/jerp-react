import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AuthRoute from 'utils/AuthRoute';
import GuestRoute from 'utils/GuestRoute';
import Dashboard from 'pages/Dashboard/Dashboard';
import Login from 'pages/Auth/Login';
import PageNotFound from 'pages/PageNotFound';
import OrderCreate from 'pages/Orders/CreateNew/OrderCreate';
import OrderApproval from 'pages/Orders/Approval/OrderApproval';

function JerpApp() {
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

export default JerpApp;
