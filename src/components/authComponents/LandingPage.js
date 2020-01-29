import React from 'react';
import SideNav from './SideNavBar';
import { HashRouter } from "react-router-dom";
export default function LandingPage() {
    
    return (
        <div>
        <HashRouter>
        <SideNav> </SideNav>
        </HashRouter>
        </div>
    )
}
