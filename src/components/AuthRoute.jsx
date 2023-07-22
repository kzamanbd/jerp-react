import useAuth from '@/hooks/useAuth';
import AppLayout from '@/layouts/AppLayout';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <AppLayout>{children}</AppLayout> : <Navigate to="/login" />;
}
