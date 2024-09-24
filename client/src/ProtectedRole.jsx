import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './GlobalContext';
import Unauthorised from './components/Unauthorised';
export const ProtectedRole = ({ children }) => {
    const { isAuthenticated, role } = useAuth();
    // write logic to  get role from this token and then decide if want to show outlet or no 
    return role == 1 ? <>{Outlet}</> : <><Unauthorised /></>;
};