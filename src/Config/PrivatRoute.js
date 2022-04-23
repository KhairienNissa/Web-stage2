import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin } from "../component/IsLogin";

const PrivateRoute = () => {
    return (
        isLogin ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute;