import React, { Component } from 'react';
import MainlayoutES from '../layout/mainlayoutES';
import {Link} from "react-router-dom";

export default class Principio extends Component {
  render() {
    return (
      <div>
        <MainlayoutES>
            <div className="slideshow">
              <img className="beach" src="/img/beach-clean.jpeg" alt="img"/>
            </div>
            <div className="choice">
              <p>select a category or    
              <Link className="link-land"> create an event</Link>
              </p>
            </div>
            <div className="categories">
              <div classname="category" id="air"> 
                <Link className="link-category">
                  <img className="elements" src="/img/air.png" alt="img"/> 
                </Link> 
              </div>
              <div classname="category" id="land">
                <Link className="link-category">
                  <img className="elements" src="/img/land.png" alt="img"/>
                </Link>
              </div>
              <div classname="category" id="water">
                <Link className="link-category">
                  <img className="elements" src="/img/water.png" alt="img"/>
                </Link>
              </div>
            </div>
            
    
        

        </MainlayoutES>
        
      </div>
    )
  }
}
