import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.auth)
    console.log(user)
    const location = useLocation()

    if (isLoading) {
        <p>Loading...</p>
    }

    if (!user.email) {
        <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;