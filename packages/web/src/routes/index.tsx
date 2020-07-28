import React from 'react'
import { Switch, } from "react-router-dom";
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

import Login from '../pages/login';
import Home from '../pages/home';
import ChartProvider from '../contexts/chartContext';



const Routes = () => (


    <Switch>
        <PublicRoute path="/" exact component={() => { return <Login /> }} />
        <ChartProvider>
            <Switch>
                <PublicRoute path="/home" exact component={() => { return <Home /> }} />
                <PrivateRoute path="/private" exact component={() => { return <h1>Private</h1> }} />
                <PublicRoute path="/public" exact component={() => { return <h1>Public</h1> }} />
            </Switch>
        </ChartProvider>
        <PublicRoute path="/" exact={false} component={() => { return <h1>401 not found</h1> }} />
    </Switch>

);

export default Routes;