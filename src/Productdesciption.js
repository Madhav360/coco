import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Contact from './Contact';


 class Productdesciption extends Component{
    render() {
        return (
            <Contact contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: [],
        
    };

     componentDidMount() {
        fetch('http://blockchain.vibrathon.co/api/ViBlock?filter=%7B%22where%22%3A%7B%22blockProgression%22%3A%20%22END%22%7D%7D')

            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
    
   
}
export default Productdesciption;