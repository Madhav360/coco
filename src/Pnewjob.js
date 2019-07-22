import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

export default class Pnewjob extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

    <Header/>
    
    <div className="container">
    <div className="row">
    <div className="col-md-12">
	<form className="form-horizontal" role="form">
        <div className="form-group">
            <label className="col-sm-3 control-label">Job Title</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="Enter Job Title" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Job Description</label>
            <div className="col-sm-9">
            <textarea className="form-control" rows="3" placeholder="Enter Description" id=""></textarea>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Industry</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Industry Sub Category</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Key Skill</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Type of Job</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Year of Experience</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Designation</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="Enter Designation" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">No of Vacancies</label>
            <div className="col-sm-9">
                <input type="number" id="" placeholder="Enter No of Vacancies" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Job Location</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="Enter Job Location" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Mode of Interview</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Type of Employeement</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Candidate Qualification</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Stream/Branch</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Passed out Year</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Last Date to Apply</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Interviewer</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Interview Round</label>
            <div className="col-sm-9">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-3 control-label">Post till</label>
            <div className="col-sm-9">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <div className="text-center">
                <a type="submit" className="btn btn-primary">Register</a>
            </div>
        </div>
    </form> 
    </div>
    </div>
    </div>

	<Footer/>

	</div>

)
    }
}