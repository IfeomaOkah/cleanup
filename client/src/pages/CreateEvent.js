import React, { Component } from 'react'
import AuthService from '../utilities/AuthService';
import MainLayout from '../layout/mainlayout';

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
    this.service = new AuthService();
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
      debugger
      const {name, value} = event.target;
      this.setState({[name]: value});
}  

  render() {
    return (
      <MainLayout>
        <h1 id="signup-heading">Create An Event</h1>
          <div className="signup">
            <form className="form-signup" onSubmit={this.handleEventSubmit}>

            <select name="element" value={this.state.element} size="3" onChange={ e => this.handleEvent(e)}>
              <option value="air">air</option>

              <option value="land">land</option>

              <option value="water">water</option>
            </select>

              <input type="text" name="headline" placeholder="headline" value={this.state.headline} onChange={ e => this.handleEvent(e)} ></input>

              <input type="date" name="date" placeholder="date" value={this.state.date} onChange={ e => this.handleEvent(e)} ></input>

              <input type="text" name="description" placeholder="create description" value={this.state.description} onChange={ e => this.handleEvent(e)} ></input>

              <input type="text" name="location" placeholder="create location" value={this.state.location} onChange={ e => this.handleEvent(e)} ></input>

              <button type="submit" value="Submit">Create Event!</button> 

            </form>
            
          </div>
      </MainLayout>
    )
  }
}
