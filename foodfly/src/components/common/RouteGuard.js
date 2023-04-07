import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


export const RouteGuard = ({
    children,
}) => {
    const { isAuth } = useContext(AuthContext);
    
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};