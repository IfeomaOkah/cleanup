import React, { Component } from 'react'
import MainLayout from '../layout/mainlayout';
import {Link} from "react-router-dom";
import CreateEvent from "../pages/CreateEvent";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <MainLayout>
            
            <div className="slideshow">
             
            {this.props.location.username ? this.props.location.username : "" }
              <img className="beach" src="/img/beach-clean.jpeg" alt="img"/>
            </div>
            <div className="choice">
              <p>select a category or    
              <Link to="/create_event" className="link-land"> create an event</Link>
              </p>
            </div>
            <div className="categories">
              <div className="category" id="air"> 
                <Link to="/air" className="link-category">
                  <img className="elements" src="/img/air.png" alt="img"/> 
                </Link> 
              </div>
              <div className="category" id="land">
                <Link to="/land" className="link-category">
                  <img className="elements" src="/img/land.png" alt="img"/>
                </Link>
              </div>
              <div className="category" id="water">
                <Link to="water" className="link-category">
                  <img className="elements" src="/img/water.png" alt="img"/>
                </Link>
              </div>
            </div>
            
    
        

        </MainLayout>
        
      </div>
    )
  }
}
