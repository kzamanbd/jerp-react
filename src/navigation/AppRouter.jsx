import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/features/users/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
