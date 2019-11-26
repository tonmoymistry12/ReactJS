import React, { Component } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";

 class SignInOtpControls extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            useremail:''
        };
        this.handleChange.bind(this);
      }
    
      handleChange = value => {
        this.setState({ value },()=>{
          this.props.data(this.state.value)
        });
        
      };
     
    
    render() {
        return (
            <form className="add-option">
            <p className="otpSuccessMsg">An OTP has been sent to your email id:  <span className="email_text">{this.props.getEmailOfUser}.</span><br/>Please enter it below.</p>
            <div className="otp-input">
            <OtpInput
                onChange={this.handleChange}
                numInputs={6}
                otpType="number"
                separator={<span className="separator">-</span>}
                value={this.state.value}
            />
          </div>
         </form> 
          
        );
      }
 }
export default SignInOtpControls;