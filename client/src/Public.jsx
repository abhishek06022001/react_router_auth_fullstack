import { Navigate } from 'react-router-dom';
import { useAuth } from './GlobalContext';
export const Public = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/" /> : <>{children}</>;
};