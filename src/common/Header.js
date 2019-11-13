import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div className="coconav text-center">
               <img className="img-responsive nav-logoheight" src="image/logo.jpg" />
        </div>
    )
    }
}