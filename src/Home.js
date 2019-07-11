import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

    <Header/>

	<section id="letsget">
	<div className="container">
		<div className="row">
			<div className="col-md-12 col-xs-12">
				<p className="home-lookingfor">Are You looking</p>
				<p className="home-lookingyour">for your <span>dream job?</span></p>
			</div>
			<div className="col-md-12">
			<div className="col-md-10 col-md-offset-1">
			<div className="home-formsmarg">
				<form method="get" className="form-inline">
				<div className="col-md-4 homepadds0">
					<input className="homesearch-location" type="text" placeholder="Job title, Keyword, Company" />
					<span className="search_homeicon">
						<i className="fa fa-search homesearch-iconss" aria-hidden="true"></i>
					</span>
				</div>
				<div className="col-md-3 homepadds0">
					<input className="homesearch-location" type="text" placeholder="Location" />
					<span className="search_homeicon">
						<i className="fa fa-map-marker homesearch-iconss" aria-hidden="true"></i>
					</span>
				</div>
				<div className="col-md-3 homepadds0">
					<input className="homesearch-location" type="text" placeholder="Job Type" />
					<span className="search_homeicon">
						<i className="fa fa-briefcase homesearch-iconss" aria-hidden="true"></i>
					</span>
				</div>
				<div className="col-md-2 homepadds0">
					<button type="submit" className="btn btn-primary homesearch-btn"> Search</button>
				</div>
				</form>
			</div>
			</div>
			</div>
		</div>
	</div>
	</section>
		
	<section className="home-bgscategories">
	<div className="container">
	<div className="row">
		<div className="col-lg-3">
		<div className="thumbnail shadow-depth-1">
		<div className="panel-heading">
			<div className="row">
			<p className="home-categorieshead">Categories</p>
			<div className="col-xs-8 text-left">
				<p className="home-categoriestext">24</p>
			</div>
			<div className="col-xs-4">
				<img className="img-responsive" src="image/service1.png" />
			</div>
			</div>
		</div>
		</div>
		</div>
		<div className="col-lg-3">
		<div className="thumbnail shadow-depth-1">
		<div className="panel-heading">
			<div className="row">
			<p className="home-categorieshead">Jobs</p>
			<div className="col-xs-8 text-left">
				<p className="home-categoriestext">5648</p>
			</div>
			<div className="col-xs-4">
				<img className="img-responsive" src="image/service2.png" />
			</div>
			</div>
		</div>
		</div>
		</div>
		<div className="col-lg-3">
		<div className="thumbnail shadow-depth-1">
		<div className="panel-heading">
			<div className="row">
			<p className="home-categorieshead">Recruiters</p>
			<div className="col-xs-8 text-left">
				<p className="home-categoriestext">244</p>
			</div>
			<div className="col-xs-4">
				<img className="img-responsive" src="image/service3.png" />
			</div>
			</div>
		</div>
		</div>
		</div>
		<div className="col-lg-3">
		<div className="thumbnail shadow-depth-1">
		<div className="panel-heading">
			<div className="row">
			<p className="home-categorieshead">Audio/Video Interviews</p>
			<div className="col-xs-8 text-left">
				<p className="home-categoriestext">287</p>
			</div>
			<div className="col-xs-4">
				<img className="img-responsive" src="image/service4.png" />
			</div>
			</div>
		</div>
		</div>
		</div>
	</div>
	</div>
	</section>
		
	<section className="home-fixedbgs">
	<div className="container">
	<div className="row">
	<div className="col-md-12">
	<div className="col-md-10 col-md-offset-1">
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad1.png" />
		</div>
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad2.png" />
		</div>
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad3.png" />
		</div>
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad4.png" />
		</div>
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad1.png" />
		</div>
		<div className="col-lg-2 col-xs-6 text-center">
			<img className="img-responsive home-fixedlogo" src="image/ad2.png" />
		</div>
	</div>
	</div>
	</div>
	</div>
	</section>

	<section class="browse-categorypads">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
					<h2 className="browse-categoryhead text-center">Browse jobs by category</h2>
					<p className="browse-categorytext text-center">Lorem Lorem Lorem Lorem Lorem Lorem</p>
			</div>
		</div>
		<div className="row">
		<div className="col-md-12">
		<div className="col-md-8 col-md-offset-2">
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="http://mtechwebsoft.com/templates/himax/demo/images/what_we_do/2.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Tech & Programming</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category2.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Product Design</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category3.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Digital Marketing</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category4.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Writing & Translation</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category5.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Video & Animation</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category6.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Creative & Design</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category7.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Education & Training</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
			</div>
			<div className="col-sm-6 col-md-3">
				<div className="single_what_we_do">
					<div className="what_we_do_figure">
						<img src="image/category8.png" className="img-responsive" />
					</div>
					<h4 className="what_we_do_title">Lifestyle</h4>
					<div className="what_we_do_content">720 jobs</div>
				</div>
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
			<img className="image-responsive home-visibleimg" src="image/uniqueim.png" />
		</div>
		<div className="col-md-8">
			<p className="home-uniquehead">Unique Platform with end to end interview process</p>
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