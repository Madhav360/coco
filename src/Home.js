import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>
        <div className="container-fluid mdv-back-coco">
			<div className="row">
				<div className="cong-head text-center">
					<h1>Congratulations!!</h1>
					<p>You are using blockchain validated product</p>
					<img className="img-resposive" src="image/assure.png" /><br />
			
					<Link to="/Productdesciption"><button className="btn">View</button></Link>
				</div>

			</div>
		</div>
	</div>

)
    }
}