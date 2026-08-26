import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useUser } from "../context/UserContext";

const ProtectedRoute = () => {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;