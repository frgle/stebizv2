import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute() {
	const { authLevel } = useAuth();

	const authorized = authLevel > 2;

	return authorized ? <Outlet /> : <Navigate to="/denied" replace />;
}

export default PrivateRoute;