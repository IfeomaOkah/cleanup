import React, { Component } from 'react';
import Mainlayout from '../layout/mainlayout';
import AuthService from '../utilities/AuthService';
import {Link} from "react-router-dom";
const auth = new AuthService();

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: String,
        password: String
       },
    error: null
  }
  this.handleLogin = this.handleLogin.bind(this);
}  
  handleLogin = (e)=> {
    e.preventDefault();
    console.log(this.state.user)
    auth.login(this.state.user.username, this.state.user.password)
        .then((response)=> {
            console.log(response)
            this.props.history.push("/profile");
        })
        .catch((error)=> {
          console.log(error)
            this.setState({error: error});
        })
  }
  handleFormLogin = (e)=> {
    let user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({ 
        user
    })
  } 

  render() {
    return (
        <Mainlayout> 
          <h1 id="signup-heading">Log in</h1>
          <div className="signup">
            <form className="form-signup" onSubmit={this.handleLogin}>

            <input type="text" name="username" placeholder="enter your username" value={this.state.username} onChange={this.handleFormLogin}/>  

            <input type="password" name="password" placeholder="enter your password" value={this.state.password} onChange={this.handleFormLogin}/>

            <button type="submit" value="Submit">submit</button> 
            </form>
          </div> 
        
        </Mainlayout>
      
    )
  }
}
