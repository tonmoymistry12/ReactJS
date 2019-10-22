import React, { Component } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";

 class SignInOtpControls extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange.bind(this);
      }
    
      handleChange= value => {
        this.setState({ value });
      };

     
    
    render() {
        return (
            <form className="add-option">
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