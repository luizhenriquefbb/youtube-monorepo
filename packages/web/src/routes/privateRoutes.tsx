import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import SomeSpinner from '../components/spiner';



const PrivateRoute:React.FC<{component: React.FC} & RouteProps> = (
    { component: Component, path,  ...props }) => {

    const { signed, loading } = useAuth();

    if (loading) {
        return <SomeSpinner />
    }

    return (

        <Route
            {...props}
            render={() => signed
                ? <Component {...props} />
                : <Redirect to='/' />
            }
        />
    )
}

export default PrivateRoute;