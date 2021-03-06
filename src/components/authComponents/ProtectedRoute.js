import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth';
import SideNav from './SideNavBar';


export const  ProtectedRoute = ({component: Component, ...rest}) => {

    //back button history clear
    window.addEventListener('popstate', function (event)
     {
        history.pushState(null, document.title, location.href);
     });
     
    return (
        <div className="component_wrapper">
        
        <Route
        {...rest}
        render={ props => {
            if(auth.isAuthenticated() ){
                return (
                    <div >
                    <Component  {...props} />
                    </div>
                    );
            }
            else {
              return (
                
                  <Redirect
                           to={{
                               pathname: "/",
                               state: {
                                   from: props.location
                               }
                           }} />
              )
            }
        }

        }
        />
        
    </div>
    )
}
