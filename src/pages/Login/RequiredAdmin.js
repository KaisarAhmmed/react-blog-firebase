import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

const RequiredAdmin = ({ children }) => {
    const { user, logOut } = useUserAuth();
    const location = useLocation();

    if (user.role !== "admin" || !user) {
        logOut();
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAdmin;
