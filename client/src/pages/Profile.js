import React, { Component } from 'react'
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import AuthEvent from '../utilities/AuthEvent';
import AuthService from "../utilities/AuthService";
const eventUtils = new AuthEvent();
const auth = new AuthService();


export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }  
  }
  componentDidMount(){
    eventUtils.getUserDB()
    .then(response => {
      // debugger
      console.log(response)
      this.setState({
        user: response.data
      })
    })
    .catch(error =>{
      // debugger
      console.log(error);
      // if(error.response.data.message === "Unauthorized") this.props.history.push("/login")
    })
  }
  render() {
    return (
     <div>
      <Nav />
        <div className="profile-body">
          
          <div className="profile-header">
          <Link to="/logout" className="link-logout" onClick={this.handleLogout}>
                logout
          </Link>
          <Link
            to="/profile">
            <h3 className="hello">Hi, {auth.getUser()}</h3>
          </Link>


                
          </div>
        
        <div className="profile-container"></div>
          <div className="profile-1">
            <Link
                    to='/cleanups'
                    className="link-profile"
                  > <h3>Browse CleanUps    </h3> 
                  </Link>
               
          </div>

          <div className="profile-2">
          <Link
                    to='/create_event'
                    className="link-profile"
                  ><h3>Plan a CleanUp</h3>
                  </Link>
                  
          </div>
          <div className="profile-3">
             <Link
                    to='/mycleanups'
                    className="link-profile"
                  ><h3>My CleanUps</h3>
                  </Link>
     
          </div>
          

          <div className="upcoming">
          <Link
                    to='/upcoming'
                    className="link-profile"
                  ><h3>Upcoming CleanUps</h3>
                  </Link>

          </div>


          <div className="profile-4"></div>
          
  
        


        </div>
     </div> 
    )
  }
}
