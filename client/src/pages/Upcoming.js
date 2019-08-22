import React, { Component } from 'react'
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import AuthEvent from '../utilities/AuthEvent';
import AuthService from "../utilities/AuthService";
const eventUtils = new AuthEvent();
const auth = new AuthService();

export default class Upcoming extends Component {
  render() {
    return (
      <div>
      <Nav />
        <div className="profile-body">
          
          <div className="upcoming-header">
          <Link to="/logout" className="link-logout" onClick={this.handleLogout}>
                logout
          </Link>
          <Link
            to="/profile">
            <h3 className="hello-my">Hi, {auth.getUser()}</h3>
          </Link>


                
          </div>
        
        <div className="profile-container"></div>
          


          
  
        


        </div>
     </div> 
    )
  }
}

