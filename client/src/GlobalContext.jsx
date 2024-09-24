import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// create a cloud context 
const AuthContext = createContext();
// create a provider so that it will wrap all the children in it whatever authcontext is providing 
const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') || false);
    const [role, setrole] = useState({});
    useEffect(() => {
        async function getUserInfo() {
            console.log("The user is ", user);
            console.log("The token is ", token);
            const new_user = await axios.get('/api/user_info', {
                headers: {
                    Authorization: token
                }
            });
            console.log("The user after is ", new_user);

            setUser(new_user.data.role);
        }
        getUserInfo();
    }, [token]);

    return <AuthContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated, role, setrole }} >{children}</AuthContext.Provider>;
};
export default AuthProvider;
// to use the context provided
export const useAuth = () => {
    return useContext(AuthContext);
};