import React, { Component } from 'react'
import MainLayout from '../layout/mainlayout';
import {Link} from "react-router-dom";


export default class Profile extends Component {
  render() {
    return (
      <MainLayout>
        <div>

          <div className="profile-1">
            <img className="beach" src="/img/beach-clean.jpeg" alt="img"/>
          </div>
          <div className="profile-2">
            <input className="searchbar" type="text" name="search" placeholder="search cleanups"/>
            
            
            <Link to="/create_event"><button id="bt" type="submit" value="Submit">create an event</button> 
            </Link>
            
          </div>
          <div className="profile-3"></div>
          <div className="profile-4"></div>
          
  
          




        </div>
        </MainLayout>
    )
  }
}
