import axios from 'axios';
import qs from "querystring";

export default class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER}/api`,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, email, firstname, lastname, dob, password) => {
      return this.service({
      method: "POST",
      url: '/signup', 
      data: {username, email, firstname, lastname, dob, password}
    })
    .then(response => response.data)
    .catch(error =>{
      console.log(error);
    })
  }

  login = (username, password) => {
    return this.service({
        method: "POST",
        url: '/login',
        data: {username,password}
    })
    .then((response)=> {
        console.log(response)
        this.setUser(response.data.username)
    })
    .catch(error =>{
        console.log(error);
    })
  }

  loggedIn = ()=>{
    const user = this.getUser()
    return !!user; 
  }

  setUser = (user)=>{
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser = ()=>{
    return JSON.parse(localStorage.getItem('user'));
  }

  logout = ()=>{
    return this.service({
      url: '/logout',
    })
    .then((res)=> {
      localStorage.removeItem('user');
    })
  }  
  
  makeEvent = (element, img_url, headline, date, description, location, cleaner) => {
    return this.service({
    method: "POST",
    url: '/create_event', 
    data: {element, img_url, headline, date, description, location, cleaner}
  })
  .then(response => response.data)
  .catch(error =>{
    console.log(error);
  })
}
getEvent = ()=>{
  return JSON.parse(localStorage.getItem('event'));
}
}

