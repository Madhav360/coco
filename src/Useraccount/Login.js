import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
	constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
    
  
    render(){
	return(
    <div>

        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-6 login-form-2 login-left-color">
                    <img className="img-responsive" src="/image/login.png" />
                </div>
                <div className="col-md-6 login-form-1">
                <img className="img-responsive nav-logoheight" src="/image/logo.png" />
                    <h3>Welcome to Cambios</h3>
                    <h4>Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h4>
                    <button type="button" className="btn btn-primary jobseekerbtns">A <br/> Candidate</button>
                    <button type="button" className="btn btn-primary jobseekerbtns">An <br/> employer</button>
                    <button type="button" className="btn btn-primary jobseekerbtns">Both</button>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        <div className="form-group login-textemail">
                            <label>Email</label>
                            <input type="text" className="form-control logininputs"  placeholder="abc@gmail.com" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div className="form-group login-textemail">
                            <label>Password</label>
                            <input type="password" className="form-control logininputs" placeholder="*******" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                        <div className="form-group">
                            <p className="login-forget"><Link to="/Useraccount/Forgetpassword" className="ForgetPwd">Forgot Password?</Link></p>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Register" />
                        </div>
                        <p className="login-withcolor">Or Login with</p>
                        <div className="col-md-12">
                            <ul className="social-network social-circle">
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>				
                        </div>
                        <div className="form-group">
                            <span className="login-withcolor">New user? </span> <Link to="/Useraccount/Signup" className="ForgetPwd">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

	</div>

)
    }
}