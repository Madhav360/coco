import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
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
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

	  }
  
      validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

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

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
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
                <div className="col-md-12 login-form-1">
                <img className="img-responsive nav-logoheight" src="/image/logo.png" /><br/><br/>
                <Link to="/Useraccount/Login"><h4>Back to Login</h4></Link>
                    <div className="col-md-4 col-md-offset-4 text-center">
                    <img src="/image/category5.png" class="img-responsive forgetmargin" />
                    <p className="forget-texts">Signup</p>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        <div className="form-group login-textemail">
                            <input type="text" class="form-control forgetinputs" placeholder="Your Name" name="username" value={this.state.fields.username} onChange={this.handleChange} />
							<div className="errorMsg">{this.state.errors.username}</div>
                        </div>
                        <div className="form-group login-textemail">
                            <input type="text" class="form-control forgetinputs" placeholder="Your Email Id" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
							<div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div className="form-group login-textemail">
                            <input type="text" class="form-control forgetinputs" placeholder="Your Mobile no" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
							<div className="errorMsg">{this.state.errors.mobileno}</div>
                        </div>
                        <div className="form-group login-textemail">
                            <input type="password" class="form-control forgetinputs" placeholder="Your Password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
							<div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Save" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

	</div>

)
    }
}