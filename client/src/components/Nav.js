
import React, {Component} from 'react';
import { withRouter } from "react-router"; 
import Profile from '../pages/Profile';
import {Link} from "react-router-dom";
import AuthService from "../utilities/AuthService";
const auth = new AuthService();

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: null
    }
  }
    handleLogout = (e)=> {
        e.preventDefault();
        var fixProps = this.props;
        auth.logout()
            .then(()=> {
                this.setState({user: null}, ()=> {
                    fixProps.history.push("/");
                })               
            })
            .catch((error)=> {
                this.setState({error: error.message})
            })
    }
    componentDidMount() {
        this.setState({
            user: auth.getUser()
        })
    }
    render() {
   
        return (
            <nav>
              <Link 
                to="/" 
                className="link-logo"
              >
                <img className="logo" src="/img/cleanup-logo.png" alt="img"/>
              </Link>

              <Link 
                to="/es" 
                className="link-main"
                >
                  español
              </Link>

              
            {
                localStorage.user? 
                <div>
                <Link to="/logout" className="link-main" onClick={this.handleLogout}>logout</Link>

                <Link
                    to='/profile'
                    className="link-main"
                  >profile
                  </Link>

                 <h3 className="link-main">Hi, {auth.getUser()}</h3>
                 </div>
              :
                <div>
                  <Link
                    to='/signup'
                    className="link-main"
                  >signup
                  </Link>
                  <Link
                    to='/login'
                    className="link-main"
                  >login
                  </Link>
                </div>
            }
            </nav>
        )
    }
}

export default withRouter(Nav);



// import React, { Component } from 'react'
// import {Link} from "react-router-dom";

// export default class Nav extends Component {
//   render() {
//     return (
//       <div className="navbar">
//         <Link to="/" className="link-logo"><img className="logo" src="/img/cleanup-logo.png" alt="img"/></Link>
//         <Link to="/signup" className="link-main">sign up</Link>
//         <Link to="/login" className="link-main">log in</Link>
//         <Link to="/es" className="link-main">español</Link>   
//       </div>
//     )
//   }
// }