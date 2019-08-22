import React, { Component } from 'react'
import AuthEvent from '../utilities/AuthEvent';
import {Link} from "react-router-dom";

export default class CreateEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      element: '',
      headline: '',
      date: '',
      description: '', 
      location: ''
    };
    this.service = new AuthEvent();
  }
    handleEventSubmit = (event) => {
      event.preventDefault();

      const element = this.state.element;
      const headline = this.state.headline;
      const date = this.state.date;
      const description = this.state.description;
      const location = this.state.location;
     
      
      this.service.makeEvent(element, headline, date, description, location)
      .then( response => {
        this.props.history.push({
          pathname: '/',
          state: response.headline
        })
      })
      .catch( error => console.log(error) )
    }
    handleEvent = (event) => { 
      const {name, value} = event.target;
      this.setState({[name]: value});
}  

  render() {
    return (
      <div className="login-body">
        <div className="login-header"></div>
        <img className="login-logo" src="/img/cleanup-logo.png" alt="img"/>
        <h5 id="login-heading">Make a difference while you mingle.</h5>
          <div className="signup">
            <form className="form-login" onSubmit={this.handleEventSubmit}>

              <input type="text" name="headline" placeholder="headline" value={this.state.headline} onChange={ e => this.handleEvent(e)} ></input>

              <input type="date" name="date" placeholder="date" value={this.state.date} onChange={ e => this.handleEvent(e)} ></input>

              <input type="text" name="description" placeholder="description" value={this.state.description} onChange={ e => this.handleEvent(e)} ></input>

              <input type="text" name="location" placeholder="location" value={this.state.location} onChange={ e => this.handleEvent(e)} ></input>
          
              <br></br>

              <button type="submit" value="Submit">Create CleanUp!</button> 
               
              <Link 
                to={"/profile"}> 
                <p id="signup">maybe later</p>
              </Link>
            
            </form>
            <br></br>
          </div>
      </div>
    )
  }
}
