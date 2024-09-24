import { Navigate } from "react-router-dom";
import Unauthorised from "./components/Unauthorised";

export const Public = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? <Unauthorised /> : <>{children}</>;
};
{/* <Navigate to="/" /> */ }