import axios from 'axios';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export default class AuthEvent {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER}/api`,
      withCredentials: true
    });
    this.service = service;
  }
  makeEvent = (element, headline, date, description, location) => {
    return this.service({
      method: "POST",
      url: '/create_event', 
      data: {element, headline, date, description, location}
    })
    .then(response => response.data)
    .catch(error =>{
      console.log(error);
    })
  }
  getEvent = ()=>{
    return axios.get(`${process.env.REACT_APP_SERVER}/api/cleanups`)
    .then(response => 
        response.data
      )
    .catch(error =>{
      console.log(error);
    })
  }

  getEventDetails = (id) => {
    return axios.get (`${process.env.REACT_APP_SERVER}/api/cleanups/${id}`)
  } 
  getUserDB = () => {
    return this.service({
      method: "GET",
      url: "/user-profile"
    })
  } 
 
}

