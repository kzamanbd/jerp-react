import AppLayout from '@/components/AppLayout';
import useAuth from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <AppLayout>{children}</AppLayout> : <Navigate to="/login" />;
}
