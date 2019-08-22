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
      <div className="login-body">    
        <div className="login-header"></div>
        <img className="login-logo" src="/img/cleanup-logo.png" alt="img"/>
        <h5 id="login-heading">Make a difference while you mingle.</h5>
        <div className="sign-up ">
          <form className="form-login" onSubmit={this.handleLogin}>

          <input type="text" name="username" placeholder="enter your username" value={this.state.username} onChange={this.handleFormLogin}/>  

          <input type="password" name="password" placeholder="enter your password" value={this.state.password} onChange={this.handleFormLogin}/>

          <button type="submit" value="Submit">submit</button> 
          </form>

          <p id="signup">Don't have account? 
            <Link to={"/signup"}> sign up</Link>
          </p>
        </div>       
      </div>   
    )
  }
}
