import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';
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
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
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
                <Route
                    path="/features/local_sales/sales_order"
                    element={
                        <PrivateRoute>
                            <OrderCreate />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/features/local_sales/order_approval"
                    element={
                        <PrivateRoute>
                            <OrderApproval />
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

export default JerpApp;
