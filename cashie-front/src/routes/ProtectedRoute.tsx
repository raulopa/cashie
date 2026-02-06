import { Navigate, Outlet } from 'react-router-dom';
import { AuthenticationService } from '@/features/auth/services/auth-service'


export function ProtectedRoute() {

    const { isAuthenticated } = AuthenticationService

    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
