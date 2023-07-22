import BlankLayout from '@/components/BlankLayout';
import useAuth from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function GuestRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? (
        <Navigate to="/features/users/dashboard" />
    ) : (
        <BlankLayout>{children}</BlankLayout>
    );
}
