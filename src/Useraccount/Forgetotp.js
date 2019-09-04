import React from 'react';
import { Link } from 'react-router-dom';

export default class Forgetotp extends React.Component{
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
            fields["otpone"] = "";
            fields["otptwo"] = "";
            fields["otpthree"] = "";
            fields["otpfour"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["otpone"]) {
          formIsValid = false;
          errors["otpone"] = "*";
        }
        if (!fields["otptwo"]) {
              formIsValid = false;
              errors["otptwo"] = "*";
        }
        if (!fields["otpthree"]) {
              formIsValid = false;
              errors["otpthree"] = "*";
        }
        if (!fields["otpfour"]) {
              formIsValid = false;
              errors["otpfour"] = "*";
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
                    <p className="forget-texts">Forgot password</p>
                    <p className="forget-entertex">Enter 4 digit otp sent to your registered phone no or email id</p>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        <div className="col-md-3 col-xs-3">
                        <div className="form-group login-textemail">
                            <input type="text" className="form-control otpinputs"  placeholder="" name="otpone" value={this.state.fields.otpone} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.otpone}</div>
                        </div>
                        </div>
                        <div className="col-md-3 col-xs-3">
                        <div className="form-group login-textemail">
                            <input type="text" className="form-control otpinputs"  placeholder="" name="otptwo" value={this.state.fields.otptwo} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.otptwo}</div>
                        </div>
                        </div>
                        <div className="col-md-3 col-xs-3">
                        <div className="form-group login-textemail">
                            <input type="text" className="form-control otpinputs"  placeholder="" name="otpthree" value={this.state.fields.otpthree} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.otpthree}</div>
                        </div>
                        </div>
                        <div className="col-md-3 col-xs-3">
                        <div className="form-group login-textemail">
                            <input type="text" className="form-control otpinputs"  placeholder="" name="otpfour" value={this.state.fields.otpfour} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.otpfour}</div>
                        </div>
                        </div>
                        <div className="form-group">
                        <Link to="/Useraccount/Newpassword"><input type="submit" className="btnSubmit" value="Next" /></Link>
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