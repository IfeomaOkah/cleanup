import React, { Component } from 'react';
import AuthService from '../utilities/AuthService';
import Mainlayout from '../layout/mainlayout';
import {Link} from "react-router-dom";

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      username: '',
      password: ''
    };
    this.service = new AuthService();
  }
    handleFormSubmit = (event) => {
      event.preventDefault();

      const username = this.state.username;
      const email = this.state.email;
      const firstname = this.state.firstname;
      const lastname = this.state.lastname;
      const dob = this.state.dob;
      const password = this.state.password;
    
      this.service.signup(username, email, firstname, lastname, dob, password)
      .then( response => {
        this.props.history.push({
          pathname: '/',
          state: response.username
        })
        .catch((error)=> {
   
        })
       
      })
      .catch( error => console.log(error) )
    }
    handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
}  
  render() {
    return (
      <Mainlayout>
         <h1 id="signup-heading">Sign Up</h1>

          <div className="signup">
        
            <form className="form-signup" onSubmit={this.handleFormSubmit}>

                <input type="username" name="username" placeholder="create username" value={this.state.username} onChange={ e => this.handleChange(e)} ></input>

                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={ e => this.handleChange(e)} ></input>

                <input type="text" name="firstname" placeholder="first name" value={this.state.firstname} onChange={ e => this.handleChange(e)} ></input>

                <input type="text" name="lastname" placeholder="last name" value={this.state.lastname} onChange={ e => this.handleChange(e)} ></input>

                <input type="date" name="dob" placeholder="date of birth" value={this.state.dob} onChange={ e => this.handleChange(e)} ></input>

                <input type="password" name="password" placeholder="create password" value={this.state.password} onChange={ e => this.handleChange(e)}></input>

                <button type="submit" value="Submit">submit</button> 
            </form>

            <p>Already have account? 
              <Link to={"/login"}> Log in</Link>
            </p>


          </div>  
  
    
      </Mainlayout>
    )
  }
}



