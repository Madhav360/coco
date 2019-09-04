import React from 'react';
import { Link } from 'react-router-dom';

export default class Newpassword extends React.Component{
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
            fields["newpass"] = "";
            fields["newcpass"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["newpass"]) {
          formIsValid = false;
          errors["newpass"] = "*Please enter new password";
        }
		if (!fields["newcpass"]) {
          formIsValid = false;
          errors["newcpass"] = "*Please enter Confirm new password";
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
                    <p className="forget-texts">Set new password</p>
                    <p className="forget-entertex">Enter your new password</p>
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                        <div className="form-group login-textemail">
                            <input type="password" className="form-control forgetinputs"  placeholder="Enter new password" name="newpass" value={this.state.fields.newpass} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.newpass}</div>
                        </div>
						<div className="form-group login-textemail">
                            <input type="password" className="form-control forgetinputs"  placeholder="Enter Confirm new password" name="newcpass" value={this.state.fields.newcpass} onChange={this.handleChange}  />
                            <div className="errorMsg">{this.state.errors.newcpass}</div>
                        </div>
                        <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Next" />
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