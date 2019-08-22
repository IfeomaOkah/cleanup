import React, { Component } from 'react';
import axios from 'axios';
import CleanComps from '../components/CleanComps';
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import AuthEvent from '../utilities/AuthEvent';
import AuthService from "../utilities/AuthService";
const hello = new AuthService();
const auth = new AuthEvent();

export default class Cleanup extends Component {
  constructor(){
    super()
    this.state = {
        cleanups: []
    }
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER}/api`,
      withCredentials: true
    });
    this.service = service;
}

join = (id) => {
  return this.service({
    method: "POST",
    url: `/join/${id}`
  })
    .then(response => {
      
    })
    .catch(error =>{
      console.log(error);
      if(error.response.data.message === "Unauthorized") this.props.history.push("/login")
    })
}
componentDidMount() {

  auth.getEvent()
  .then(response => {
    console.log(response)
    this.setState({
      cleanups: response
    })
  })
  .catch(err => {console.log(err)})


}

  render() {
    return (
      <div>
       <Nav />
       <Link
                to="/profile">
               <h3 className="">Hi, {hello.getUser()}</h3>
              </Link>
       <div className="profile-body">
        <div className="profile-header">
        </div>
        <div> 
            {this.state.cleanups.map(cleanup =>
            <CleanComps cleanup={cleanup} join={this.join}/>
              )}
           

         </div>
         </div>
    </div>

    )
  }
}
