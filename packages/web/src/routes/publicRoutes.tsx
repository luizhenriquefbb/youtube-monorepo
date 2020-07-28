import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import SomeSpinner from '../components/spiner';



const PublicRoute: React.FC<{ component: React.FC } & RouteProps> = (
    { component: Component, path, ...props }) => {

    const { loading } = useAuth();

    if (loading) {
        return <SomeSpinner />
    }

    return (

        <Route
            {...props}
            render={() =>  <Component {...props} />}
        />
    )
}

export default PublicRoute;