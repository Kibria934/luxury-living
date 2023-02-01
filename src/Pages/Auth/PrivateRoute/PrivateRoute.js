import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading, isError, error } = useSelector(state => state.auth)
    const location = useLocation()

    if (isError || error) {
        console.log(error)
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (user.email === "") {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    if (user.email !== "") {
        return children
    }
};

export default PrivateRoute;