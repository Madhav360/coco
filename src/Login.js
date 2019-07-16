import React from 'react';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 login-form-2">
                    <img class="img-responsive" src="image/login.png" />
                </div>
                <div class="col-md-6 login-form-1">
                <img class="img-responsive nav-logoheight" src="image/logo.png" />
                    <h3>Login for Form 1</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

	</div>

)
    }
}