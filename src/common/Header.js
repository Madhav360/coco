import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div>

        <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
                <img className="img-responsive nav-logoheight" src="image/logo.png" />
            </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse-2">
            <ul class="nav navbar-nav navbar-right">
                <li><Link to="#">Categories</Link></li>
                <li><Link to="#">Find a job</Link></li>
                <li><Link to="/Postjob">Post a job</Link></li>
                <li><Link to="/Useraccount/Login">Login</Link></li>
                <li><Link to="/Useraccount/Signup">Signup</Link></li>
            </ul>
            </div>
        </div>
        </nav>

        </div>
    )
    }
}