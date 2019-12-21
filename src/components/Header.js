import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = (props) => (
    <div className="header">
    <div className="header_content">
    <img className="logo" alt="Foundry" src="/images/new_logo.svg"></img>
    <img className="hanging_img swingimage" alt="fraud score logo" src="/images/rs_score.png"></img>
    <h1 className="header__title">{props.title}<sup>{props.sup}</sup></h1>
    <h2 className="header__subtitle">{props.subtitle} </h2>
    </div>
    </div>
);
  
  Header.defaultProps = {
    title: 'RS IntelliEdge',
    sup: 'TM',
    subtitle: ''
  };

export default Header;
/* 
 <NavLink  to ="/" activeClassName="is-active" exact={true} >Dashboard</NavLink> 
    <NavLink  to ="/create" activeClassName="is-active" >Create</NavLink>
    <NavLink  to ="/edit" activeClassName="is-active" >Edit</NavLink>
    <NavLink  to ="/help" activeClassName="is-active" >Help</NavLink>
*/