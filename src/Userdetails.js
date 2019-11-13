import React from 'react';
import {Component} from 'react';
import Header from './common/Header';

 class Userdetails extends Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>
        <Header />

        <div className="container-fluid">
			<div className="row main ">
                <div className="col-md-12 userdata">
                    <div className="col-xs-3">
                      <i class='far fa-user'></i>
                    </div>
                    <div className="col-xs-9">
                        <p>Shikhar Dhawan</p>
                    </div>
                </div>
                <div className="col-md-12 userdata">
                    <div className="col-xs-3">
                    <i class="material-icons">mail_outline</i>
                    </div>
                    <div className="col-xs-9">
                        <p>Shikhar Dhawan</p>
                    </div>
                </div>
                <div className="col-md-12 userdata">
                    <div className="col-xs-3">
                    <i class="material-icons">call</i>
                    </div>
                    <div className="col-xs-9">
                        <p>Shikhar Dhawan</p>
                    </div>
                </div>
                <div className="col-md-12 userdata">
                    <div className="col-xs-3">
                    <i class='fas fa-lock'></i>
                    </div>
                    <div className="col-xs-9">
                        <p>Shikhar Dhawan</p>
                    </div>
                </div>
                <div className="col-xs-12 text-center">
                    <button className="btn addtocart">Add to Cart</button>
                </div>
			</div>
		</div>
	</div>

)
    }
}

export default Userdetails;