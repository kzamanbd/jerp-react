import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from '@/pages/Auth/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';
import OrderApproval from '@/pages/Orders/Approval/OrderApproval';
import OrderCreate from '@/pages/Orders/CreateNew/OrderCreate';
import PageNotFound from '@/pages/PageNotFound';
import AuthRoute from '@/utils/AuthRoute';
import GuestRoute from '@/utils/GuestRoute';

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
