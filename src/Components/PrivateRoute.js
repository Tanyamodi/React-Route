import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ IsloggedIn, children }) => {

    if (IsloggedIn) {
        return children
    }
    else {
        return <Navigate to="/login" />
    }

}


export default PrivateRoute