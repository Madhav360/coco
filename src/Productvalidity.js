import React from 'react';
import {Component} from 'react';
import Header from './common/Header';

 class Productvalidity extends Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>
        <Header />
        <div className="container-fluid">
			<div className="row">
                <div className="text-center mdv-head">
                    <h1>Well Done !!</h1>
                    <p>You are now proud owner of Blockhain Validate Product</p>
                </div>
                <div className="mdv-icons">
                    <img className="img-responsive" src="image/back.png" />
                </div>
                <div className="prodexp">
                    <p>You Will Notify when product got expaied !</p>
                </div>
           </div>
		</div>
	</div>

)
    }
}

export default Productvalidity;