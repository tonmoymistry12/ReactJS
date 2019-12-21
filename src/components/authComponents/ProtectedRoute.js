import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth';



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
                debugger;
                return (
                    <div >
                    
                    <div >
                    <Component  {...props} /></div>
                    
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
