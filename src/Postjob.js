import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

export default class Postjob extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

    <Header/>

	<section class="postjob-padtopbtm">
	<div className="container">
		<div className="row">
		<div className="col-md-12">
		<div className="col-md-offset-8 col-md-offset-2">
			<div className="col-md-7">
				<p className="home-lookingfor">All in one Platform</p>
				<p className="home-lookingyour">for all your <span>hiring needs</span></p>
			</div>
			<div className="col-md-5">
				<a type="button" class="btn btn-default postjob-padbutto">Post a job</a>
			</div>
		</div>
		</div>
		</div>
	</div>
	</section>
		

	<section className="home-uniquebgs">
	<div className="container">
	<div className="col-md-12 home-visiblepads">
		<div className="col-md-4 text-center">
			<img className="image-responsive home-visibleimg" src="image/uniquedashboard.png" />
		</div>
		<div className="col-md-8">
			<p className="home-uniquehead">Unique employer dashboard for end to end interview process</p>
			<p className="home-uniquetext">Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
			<a className="btn btn-lg btn-default home-uniquebtns" href="#">Lets Start</a>
		</div>
	</div>
	</div>
	</section>
	<section className="home-acessbgs">
	<div className="container">
	<div className="col-md-12 home-visiblepads">
		<div className="col-md-8">
			<p className="home-uniquehead">Acess from anything anywhere</p>
			<p className="home-uniquetext">Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
			<a className="btn btn-lg btn-default home-uniquebtns" href="#">Lets Start</a>
		</div>
		<div className="col-md-4 text-center">
			<img className="image-responsive home-visibleimg" src="image/accessim.png" />
		</div>
	</div>
	</div>
	</section>
	<section className="home-interviews">
	<div className="container">
	<div className="col-md-12 home-visiblepads">
		<div className="col-md-4 text-center">
			<img className="home-visibleimg" src="image/interviewim.png" />
		</div>
		<div className="col-md-8">
			<p className="home-uniquehead">Interviews with audio & video calls</p>
			<p className="home-uniquetext">Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum has been the industry's standard dummy text ever since the</p>
			<a className="btn btn-lg btn-default home-uniquebtns" href="#">Lets Start</a>
		</div>
	</div>
	</div>
	</section>
	<section id="home-downloadappbgs">
	<div className="container">
		<div className="row">
			<div className="col-md-7 col-xs-12">
				<p className="home-downloadapphead">Download our apps</p>
				<div className="text-left">
					<img className="home-downloadgoogle" src="image/googleapp.png" />
					<img className="home-downloadgoogle" src="image/appleapp.png" />
				</div>
			</div>
			<div className="col-md-4 col-xs-12">
					<img className="img-responsive" src="image/appbig.png" />
			</div>
		</div>
	</div>
	</section>

	<Footer/>

	</div>

)
    }
}