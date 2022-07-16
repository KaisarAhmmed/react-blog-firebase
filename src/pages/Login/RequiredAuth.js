import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

const RequireAuth = ({ children }) => {
    const { user, logOut } = useUserAuth();

    const location = useLocation();

    if (!user) {
        //logOut();
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
