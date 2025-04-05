import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute() {
	const { user } = useAuth();

	return user ? <Outlet /> : <Navigate to="/denied" replace />;
}

export default PrivateRoute;