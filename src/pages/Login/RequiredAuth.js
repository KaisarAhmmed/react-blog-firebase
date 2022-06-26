import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

const RequireAuth = ({ children }) => {
    const { user } = useUserAuth();

    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
