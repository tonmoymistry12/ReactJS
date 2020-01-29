import React, { Component } from 'react'
import auth from '../auth';
import { BrowserRouter, Route, withRouter, Link, Redirect } from "react-router-dom";

class Logout extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.handleLogout = this.handleLogout.bind(this);
        
      }
      handleLogout() {
        auth.logout(()=>{
        this.props.history.push("/");
        //window.location.reload();
        });
        
      }
    render() {
        return (
            <div>
             {this.handleLogout()}
            </div>
        )
    }
}
export default withRouter(Logout);
    
