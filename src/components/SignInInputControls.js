import React from 'react';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SignInInputControls extends React.Component 
{
  constructor() 
  {
    super();
      this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
  } 

  onChange(e)
  {
    this.setState({ [e.target.name] : e.target.value},()=>{
      this.props.signInFirstPage(this.state);
    });
  }

  render()
  {
    return (
            <div className="add-option">
                    <div className="input">
                      <input 
                            className="add-option__input" 
                            type="email" 
                            placeholder="Email"  
                            name="email" 
                            value={this.state.email} 
                            onChange={this.onChange}
                      />
                      <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <div className="input">
                      <input 
                            className="add-option__input" 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.onChange}/>
                      <span><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <div className ="remember-forgot">
                        <div className="remember">
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"  /> 
                        <label>Remember me</label>
                        </div>
                        <div className="forgot">
                        <button  className="button button__link" onClick={this.forgotPassword} > Forgot Password? </button>
                        </div>
                    </div>
                    
                </div>
             );
  }
}


export default SignInInputControls;