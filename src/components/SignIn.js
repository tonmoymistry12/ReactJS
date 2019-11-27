import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, emailCheck, otpCheck } from '../actions/SignIn';
import ReactCardFlip from 'react-card-flip';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import "react-step-progress-bar/styles.css";
import SignInInputControls from './SignInInputControls';
import SignInOtpControls from './SignInOtpControls';
import WelcomePage from './WelcomePage';
import { ProgressBar, Step } from "react-step-progress-bar";
import { faCircleNotch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import auth from './auth';
import BackboxAnimation from './BackBoxAnimation';
import { ToastContainer, Zoom } from "react-toastify";
import { toast } from 'react-toastify';

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
        isLoader:false,
        onSuccess : false,
        onFail: false,
        maskEmail: '',
        onLoggedin: false,
        progress:''
        };
      this.onSubmit = this.onSubmit.bind(this); 
      this.userDetails = this.userDetails.bind(this);
      this.otpDetails = this.otpDetails.bind(this);
    }
     
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
    

    userDetails(data)
    {
        
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
  
   otpDetails(value)
   {
     this.setState({otp : value},()=>{});
   }

   onSubmit = e => {
    e.preventDefault();
    //For 1st login screen
    if(this.state.onOtpscreen==false){
        this.setState({isLoader : true},()=>{});
        this.setState({validEmail : false},()=>{});
        this.props.login(this.state).then(
            (res)=> {
                this.setState({progress : 50},()=>{}); 
                this.setState({isLoader : false},()=>{});
                this.setState({onSuccess : true},()=>{
                toast.success(`SUCCESS: Check your email for OTP. Please note that the new OTP will expire after 180 seconds.`);  
                this.props.emailCheck(this.state.userName);
                    //code for email masking
                      //code for email masking start// 
                            let maskid ="";
                            let email = this.state.userName;
                            let prefix = email.substring(0, email.lastIndexOf("@"));
                            let postfix= email.substring(email .lastIndexOf("@"));
                            for(var i=0; i<prefix.length; i++){
                                    if(i == 0 || i == prefix.length - 1 || i == 1 || i == prefix.length - 2) {
                                        
                                        maskid = maskid + prefix[i].toString();
                                    }
                                    else {
                                        maskid = maskid + "*";
                                    }
                                }
                            this.setState({maskEmail : maskid + postfix},()=>{});
                       //email masking ends
                  //adding delay for animation effect
                  setTimeout(() => {
                    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
                    this.setState({validEmail : true},()=>{});
                    this.setState({onOtpscreen:true}, ()=>{
                       
                        this.setState({onSuccess : false},()=>{})
                    });
                  }, 2000);
                });
                
            },
            (err) => {
                       this.setState({isLoader : false},()=>{});
                       this.setState({errors:err.data});
                       this.setState({onFail : true},()=>{})
                    
                       toast.error(err.response.data.error+": "+err.response.data.message,{
                        className: 'toastOnfail'
                        });
                    
                    }
        );
       
    }
    //For otp screen
    if(this.state.onOtpscreen==true){
      this.props.otpCheck(this.state)
      .then(
        (res)=> {
          
          this.setState({onLoggedin : true},()=>{});
          this.setState({progress : 100},()=>{});
          toast.success("Login Successful");
          setTimeout(()=>{
            auth.login(()=>{
              this.props.history.push("/landingPage");
             });
          },2000)
          
        },
        (err) => {
                  debugger;
                  toast.error(err.response.data.error+": "+err.response.data.message,{
                    className: 'toastOnfail'
                    });    
                });
    }
    //Else disable submit button
    else{
       // this.setState({validEmail : false},()=>{});
    }
    
   }
    
    render() {
       return (
           
           <div  ref={ref => this.el = ref}>
           
           
           
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
                    <p className={this.state.onLoggedin == false ? 'show' : 'hidden'}>{this.state.onOtpscreen == false ? 'Please identify yourself!':'You are almost done! One more step'}</p>
                    <p className={this.state.onLoggedin == true ? 'show' : 'hidden'}>You have successfully logged in.&nbsp;&nbsp;<FontAwesomeIcon
                    className="thumbsUp"  
                    icon={faThumbsUp} 
                   /></p>
    <ProgressBar
        percent={this.state.progress}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20"
              src="/images/number-1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20"
              src="/images/number-2.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="20"
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
                <SignInOtpControls key="back" getEmailOfUser={this.state.maskEmail} data={this.otpDetails}></SignInOtpControls>
                
                </ReactCardFlip>
                <div className ="widget-button">
                    <button  
                    onClick={ this.onSubmit } 
                    disabled={!this.state.validEmail}>
                    <span 
                         className="loaderAdj" 
                         className={ this.state.isLoader ==true ? 'shown' : 'hidden' }
                    >
                        <FontAwesomeIcon 
                         className="icon-spin" 
                         icon={faCircleNotch} 
                        />
                    </span>
                   
                    <span 
                         className="loaderAdj" 
                         className={ this.state.onSuccess ==true ? 'shown' : 'hidden' }
                    >
                    <svg 
                    className="checkmark" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                    </span>
                    {this.state.onOtpscreen == false ? 'SIGN IN':'SUBMIT'}
                    </button>
                    
                </div>
                
                </div>
                </div>
                
                </div>
            
            </div>   
            <BackboxAnimation></BackboxAnimation>  
        </SlidingPane>
        
           <WelcomePage></WelcomePage>
           <div className="startbuttonDiv">
           <button className="button getStarted icon" onClick={() => this.setState({ isPaneOpen: true })}><span>Get Started!</span></button>
           </div>
           <ToastContainer autoClose={10000} transition={Zoom} />
           </div>
            
        );
        
    }
}



export default connect(null,{login,emailCheck,otpCheck})(SignIn);