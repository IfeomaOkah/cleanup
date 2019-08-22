
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
            className="link-logo">
            <img className="logo" src="/img/cleanup-logo.png" alt="img"/>
          </Link>
            {
              localStorage.user? 
                <div></div>
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


