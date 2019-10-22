import React from 'react';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WelcomePage = () => (
 <div className="desc_wrapper">
<div className="welcome_decription">
  <h2 className="animate-reveal animate-first set_margin_fromTop">RS IntelliEdge<sup>TM</sup></h2>
  <p className ="animate-reveal animate-second">RS IntelliEdge<sup>TM</sup> is a <b>multi-channel</b> fraud
   and risk management product that blends<br/> <b>human experience</b> through rules with <b>artificial intelligence</b>&nbsp;
   though machine learning algorithms to secure all available modes of digital payment 
   transactions encompassing cards, A2A payments, faster payments, biometric payments, 
   cheques, electronic toll plaza. <br/><br/>The product suite comprises an online scoring engine, 
   an access control & monitoring module, a case management module, 
   a rule management module along with statutory reports for audit compliance. </p>
   <h2 className="animate-reveal animate-first set_margin_fromTop">Why RS IntelliEdge<sup>TM</sup></h2>
   <ul className="list className animate-reveal animate-second">
   <li><FontAwesomeIcon icon={faFire} className="bullet" /> Built on latest open source technologies and commodity hardware for technical feasibility and commercial viability.</li>
   <li><FontAwesomeIcon icon={faFire} className="bullet" /> Bridges the gap for a comprehensive risk mitigation solution across traditional card payments and the evolving faster payments landscape.</li>
   <li><FontAwesomeIcon icon={faFire} className="bullet" /> Payments focussed rule editor for easy implementation of your business rules for countering multi-level frauds.</li>
   <li><FontAwesomeIcon icon={faFire} className="bullet" /> Implemented at network level for risk scoring of 1200+ Banks.</li>
   </ul>
</div>
<div className="welcome_decription_right fade-in one">
<img className="loading" src="/images/rs_.png" alt="HTML5" />
<h2 className="animate-reveal animate-third frd-src">Fraud Scoring Strategy</h2>
  
</div>
</div>   
);

export default WelcomePage;