import React from 'react';

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
                <li><a href="#">Categories</a></li>
                <li><a href="#">Find a job</a></li>
                <li><a href="#">Post a job</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
            </ul>
            </div>
        </div>
        </nav>

        </div>
    )
    }
}