import React from 'react';
import { Link } from 'react-router-dom';

export default class Forgetpassword extends React.Component{
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
          errors["emailid"] = "*Please enter your email-ID or Phone No";
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
                    <p className="forget-entertex">Enter your registered phone no or email id</p>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        <div className="form-group login-textemail">
                            <input type="text" className="form-control forgetinputs"  placeholder="Email Id or Phone no" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div className="form-group">
                        <Link to="/Useraccount/Forgetotp"><input type="submit" className="btnSubmit" value="Next" /></Link>
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