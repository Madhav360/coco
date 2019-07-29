import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class Pnewjob extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            startDate1: new Date()
          };
          this.handleChange1 = this.handleChange1.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
      handleChange1(date) {
        this.setState({
          startDate1: date
        });
      }
  
    render(){
	return(
    <div>

    <Header/>
    
    <div className="container">
    <div className="row">
    <div className="col-md-12 pnewjob-pads">
	<form className="form-horizontal" role="form">
        <div className="form-group">
            <label className="col-sm-2 control-label">Job Title</label>
            <div className="col-sm-10">
                <input type="text" id="" placeholder="Enter Job Title" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Job Description</label>
            <div className="col-sm-10">
            <textarea className="form-control" rows="3" placeholder="Enter Description" id=""></textarea>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Industry</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Industry Sub Category</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Key Skill</label>
            <div className="col-sm-10">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Type of Job</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Year of Experience</label>
            <div className="col-sm-10">
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Designation</label>
            <div className="col-sm-10">
                <input type="text" id="" placeholder="Enter Designation" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">No of Vacancies</label>
            <div className="col-sm-10">
                <input type="number" id="" placeholder="Enter No of Vacancies" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Job Location</label>
            <div className="col-sm-10">
                <input type="text" id="" placeholder="Enter Job Location" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Mode of Interview</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Type of Employeement</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Candidate Qualification</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Stream/Branch</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Passed out Year</label>
            <div className="col-sm-10">
            <DatePicker
                selected={this.state.startDate1}
                onChange={this.handleChange1}
            />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Last Date to Apply</label>
            <div className="col-sm-10">
                <input type="text" id="" placeholder="" className="form-control" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Interviewer</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Interview Round</label>
            <div className="col-sm-10">
                <select id="" className="form-control">
                    <option>text</option>
                    <option>text</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Post till</label>
            <div className="col-sm-10">
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