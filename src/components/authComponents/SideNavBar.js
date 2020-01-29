import React, { PureComponent } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignIn from '../SignIn';
import MyCases from './MyCases';
import SearchCase from './SearchCase';
import Logout from './logout';
import NotFound from '../NotFound';
import { faHome, faChartBar, faUser, faTasks, faList, faBriefcase, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';
import { formatMs } from '@material-ui/core';
import {ProtectedRoute} from '../../components/authComponents/ProtectedRoute'

export default class extends PureComponent {
    state = {
        selected: 'home',
        expanded: false
    };
    
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    render() {
    return (
        <div>
        <BrowserRouter>
     
    <Route render={({ location, history }) => (
        
       <div >
        <SideNav
        onSelect={(selected) => {
            const to = '/' + selected;
            if (location.pathname !== to) {
                history.push(to);   
               }
            
        }}
        onToggle = {this.onToggle}
        className="sideNavMenu"
        >
        
        <SideNav.Toggle />
        <div className={this.state.expanded == true ? 'show' : 'hidden'}>
        <div className="bDttAO"><div className=" dgwEff"><img className="logo_inside_nav" src="/images/RsInt_logo.png"></img></div></div>
        <div className="grlmfw"><div>Last Login: 2019-12-04T11:25:49.329Z</div><div>User: admin</div></div>
        </div>
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
            <NavIcon>
                <img src="/images/icons/home.svg"></img>
            </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="casemanagement">
                <NavIcon>
                <img src="/images/icons/management.svg"></img>
                </NavIcon>
                <NavText>
                    Case Management
                </NavText>
                <NavItem eventKey="casemanagement/mycurrentcases">
                    <NavText>
                    My Current Cases
                    </NavText>
                </NavItem>
                <NavItem eventKey="casemanagement/mycases">
                    <NavText>
                     My Cases
                    </NavText>
                </NavItem>
                <NavItem eventKey="casemanagement/searchcase">
                    <NavText>
                     Approve Assignment
                    </NavText>
                </NavItem>
                <NavItem eventKey="casemanagement/managequeue">
                    <NavText>
                     Search Case
                    </NavText>
                </NavItem>
                <NavItem eventKey="casemanagement/viewcases">
                    <NavText>
                     View Cases
                    </NavText>
                </NavItem>
                <NavItem eventKey="casemanagement/assignalerts">
                <NavText>
                 Assign Alerts
                </NavText>
               </NavItem>
               <NavItem eventKey="casemanagement/createmanualcase">
                <NavText>
                 Create Manual Case
                </NavText>
               </NavItem>
               <NavItem eventKey="casemanagement/assignmanualcases">
                <NavText>
                 Assign Manual Cases
                </NavText>
               </NavItem>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                <img src="/images/icons/dashboard.svg"></img>
                </NavIcon>
                <NavText>
                    Dashboard
                </NavText>
                <NavItem eventKey="charts/performance">
                    <NavText>
                    Performance Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/cppaml">
                    <NavText>
                     CPP/AML Dashboard  
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="usermanagement">
                <NavIcon>
                <img src="/images/icons/coordinator.svg"></img>
                </NavIcon>
                <NavText>
                    User Management
                </NavText>
                <NavItem eventKey="usermanagement/approvepending">
                    <NavText>
                    Create User
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/createuser">
                    <NavText>
                     Pending Approval
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/viewuser">
                    <NavText>
                     View User
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="rolemanagement">
                <NavIcon>
                <img src="/images/icons/role.svg"></img>
                </NavIcon>
                <NavText>
                    Role Management
                </NavText>
                <NavItem eventKey="rolemanagement/pendingapproval">
                    <NavText>
                    Pending Approval
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/createpermission">
                    <NavText>
                     Create Permission
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/editpermission">
                    <NavText>
                     Edit Permission
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/resetrole">
                    <NavText>
                     Reset Role
                    </NavText>
                </NavItem>
                <NavItem eventKey="usermanagement/resetroleapproval">
                    <NavText>
                     Reset Role Approval
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="queuemanagement">
                <NavIcon>
                <img src="/images/icons/rectangles.svg"></img>
                </NavIcon>
                <NavText>
                    Queue Management
                </NavText>
                <NavItem eventKey="queuemanagement/createqueue">
                    <NavText>
                    Create Queue
                    </NavText>
                </NavItem>
                <NavItem eventKey="queuemanagement/pendingapprovalqueue">
                    <NavText>
                     Pending Approval
                    </NavText>
                </NavItem>
                <NavItem eventKey="queuemanagement/approveassignment">
                    <NavText>
                     Approve Assignment
                    </NavText>
                </NavItem>
                <NavItem eventKey="queuemanagement/managequeue">
                    <NavText>
                     Manage Queue
                    </NavText>
                </NavItem>
                <NavItem eventKey="queuemanagement/unassignedqueue">
                    <NavText>
                     Unassigned Queue
                    </NavText>
                </NavItem>
                <NavItem eventKey="queuemanagement/viewqueue">
                <NavText>
                 View Queue
                </NavText>
            </NavItem>
            </NavItem>
            <NavItem eventKey="rulemanagement">
                <NavIcon>
                <img src="/images/icons/rulemanagement.svg"></img>
                </NavIcon>
                <NavText>
                  Rule Management  
                </NavText>
                <NavItem eventKey="rulemanagement/createrule">
                    <NavText>
                    Create Rule 
                    </NavText>
                </NavItem>
                <NavItem eventKey="rulemanagement/viewrule">
                    <NavText>
                    View Rule 
                    </NavText>
                </NavItem>
                <NavItem eventKey="rulemanagement/import-export">
                    <NavText>
                    Import/Export 
                    </NavText>
                </NavItem>
                <NavItem eventKey="rulemanagement/createruleset">
                    <NavText>
                    Create Rule Set 
                    </NavText>
                </NavItem>
                <NavItem eventKey="rulemanagement/viewruleset">
                    <NavText>
                    View Rule Set 
                    </NavText>
                </NavItem>
                <NavItem eventKey="rulemanagement/managelist">
                <NavText>
                Manage List
                </NavText>
               </NavItem>
            
            </NavItem>

            <NavItem eventKey="reports">
                <NavIcon>
                <img src="/images/icons/reports.svg"></img>
                </NavIcon>
                <NavText>
                  Reports 
                </NavText>
                <NavItem eventKey="reports/createreports">
                    <NavText>
                    Create Reports 
                    </NavText>
                </NavItem>
                <NavItem eventKey="reports/myreports">
                    <NavText>
                    My Reports
                    </NavText>
                </NavItem>
                <NavItem eventKey="reports/activityreports">
                    <NavText>
                    Activity Reports
                    </NavText>
                </NavItem>
                 
            </NavItem>
            <div className="seperator"></div>
            <NavItem eventKey="logout">
                <NavIcon>
                <img src="/images/icons/logout.svg"></img>
                </NavIcon>
                <NavText >
                <span className="logOut">SIGN OUT</span>
                </NavText>
            </NavItem>
     </SideNav.Nav>
     
    </SideNav>
    <div className="wrapper_route">
    
    <Route path="/casemanagement/searchcase"  component={props => <SearchCase />} />
    <Route path="/casemanagement/mycases"  component={props => <MyCases />} />
    <Route path="/logout" exact component={props => <Logout />} />
    
    </div>
    
     </div>           
    )}
    />
    
</BrowserRouter>
        </div>
    )}
}



