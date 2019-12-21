import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SignIn from '../components/SignIn';
import HelpPage  from '../components/HelpPage'; 
import NotFound from "../components/NotFound";
import landingPage from '../components/authComponents/LandingPage'
import MyCases from '../components/authComponents/MyCases'
import {ProtectedRoute} from '../components/authComponents/ProtectedRoute'


const AppRouter = () =>(
    <BrowserRouter>
    <div className="ezeJXt">
       <Switch>
        <Route path = "/" component = {SignIn}  exact={true}/>
        <Route path = "/help" component = {HelpPage} />
        <ProtectedRoute  component = {landingPage} />
        <Route component = {NotFound} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;
