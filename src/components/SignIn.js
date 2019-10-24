import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/SignIn';
import ReactCardFlip from 'react-card-flip';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import "react-step-progress-bar/styles.css";
import SignInInputControls from './SignInInputControls';
import SignInOtpControls from './SignInOtpControls';
import WelcomePage from './WelcomePage';
import { ProgressBar, Step } from "react-step-progress-bar";


class SignIn extends React.Component {
   
    constructor() {
      super();
        this.state = {
        isFlipped: false,
        isPaneOpen: false,
        isPaneOpenLeft: false,
        userName:'',
        password:'',
        otp:'',
        validEmail: false,
        errors :'',
        token:'',
        onOtpscreen:false,
        };
      this.onSubmit = this.onSubmit.bind(this); 
      this.userDetails = this.userDetails.bind(this);
      
    }
     
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
    

    userDetails(data){
        
    this.setState({userName: data.email, password:data.password }, ()=>{
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
    const validEmail = regexp.test(this.state.userName);
    const ValidPassword = this.state.password;
    if(validEmail & ValidPassword.length>3){
    this.setState({validEmail : true},()=>{});
    }
    else{
    this.setState({validEmail : false},()=>{});
    }

    });

    //block for otp screen on success
    if(false){
     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
       
   }
  
   
   onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state).then(
        (res)=> {
            this.setState({token:res.data.token});
            this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
            this.setState({onOtpscreen:true}, ()=>{});
        },
        (err) => {this.setState({errors:err.data})}
    );
    
    
   }
    
    render() {
       return (
           
           <div ref={ref => this.el = ref}>
           
            <SlidingPane
            className='slidingpanelforsignin '
            overlayClassName='some-custom-overlay-class'
            isOpen={ this.state.isPaneOpen }
            
            onRequestClose={ () => {
                // triggered on "<" on left top click or on outside click
                this.setState({ isPaneOpen: false });
            } }>
            <div>
            <div className = "widget_container">
                <div className="widget">
                <div>
                    <div className="widget-header">
                        <h3 className="widget-header__title">MEMBER LOGIN!</h3>
                    </div>
                <div className="widget__message">
                    <p >{this.state.onOtpscreen == false ? 'Please identify yourself!':'You are almost done! One more step'}</p>
                    <ProgressBar
        percent={this.state.onOtpscreen == true ? 50 : 0}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="16"
              src="/images/number-1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="16"
              src="/images/number-2.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="16"
              src="/images/number-3.png"
            />
          )}
        </Step>
      </ProgressBar>
                </div>
                </div>
                <div>
                <ReactCardFlip isFlipped={this.state.isFlipped} 
                flipSpeedBackToFront={2}
                flipSpeedFrontToBack={2}>
                <SignInInputControls key="front" signInFirstPage={this.userDetails}> </SignInInputControls>
                <SignInOtpControls key="back"></SignInOtpControls>
                
                </ReactCardFlip>
                <div className ="widget-button">
                    <button className="button" onClick={ this.onSubmit } disabled={!this.state.validEmail}>Login</button>
                    
                </div>
                
                </div>
                </div>
                
                </div>
            
            </div>   
        </SlidingPane>
           <WelcomePage></WelcomePage>
           <div className="startbuttonDiv">
           <button className="button getStarted" onClick={() => this.setState({ isPaneOpen: true })}><span>Get Started!</span></button>
           </div>
           </div>
            
        );
        
    }
}

export default connect(null,{login})(SignIn);