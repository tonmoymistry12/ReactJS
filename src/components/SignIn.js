import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/SignIn';
import ReactCardFlip from 'react-card-flip';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import SignInInputControls from './SignInInputControls';
import SignInOtpControls from './SignInOtpControls';
import WelcomePage from './WelcomePage';
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
        errors :''

            };
      this.onSubmit = this.onSubmit.bind(this); 
      this.userDetails = this.userDetails.bind(this);
    }
     
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
    

    userDetails(data){
        console.log(data)
    this.setState({userName: data.email, password:data.password }, this.validateDetails(data));
    //block for otp screen on success
    if(false){
     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
       
   }
   validateDetails = (props) => {
    
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
    const validEmail = regexp.test(this.state.userName);
    const ValidPassword = this.state.password;
    if(validEmail && ValidPassword ){
    this.setState({validEmail : validEmail},()=>{});

    }
    else{
    this.setState({validEmail : false},()=>{});
    }
    
   }
   
   onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state).then(
        ()=> this.context.router.push('/'),
        (err) => this.setState({errors: err.data.errors})
    );
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    
   }
    
    render() {
       return (
           
           <div ref={ref => this.el = ref}>
           
            <SlidingPane
            className='slidingpanelforsignin'
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
                    <p >You're almost done! One more step</p>
                    <ul className="widget-header_progress">
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul> 
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