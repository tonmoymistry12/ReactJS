import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SignIn from '../components/SignIn';
import HelpPage  from '../components/HelpPage'; 
import Header from '../components/Header';
import NotFound from "../components/NotFound";
import landingPage from '../components/auth_components/LandingPage'
import {ProtectedRoute} from '../components/auth_components/ProtectedRoute'


const AppRouter = () =>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path = "/" component = {SignIn}  exact={true}/>
        <Route path = "/help" component = {HelpPage} />
        <ProtectedRoute path = "/landingPage" component = {landingPage} />
        <Route component = {NotFound} />
        </Switch>
</div>
</BrowserRouter>
);

export default AppRouter;
