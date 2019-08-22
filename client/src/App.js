import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import ProtectedRoute from './components/ProtectedRoute';
import CleanUps from './pages/CleanUps';
import CleanDetail from './components/CleanDetail';
import MyCleanUps from './pages/MyCleanUps';
import Upcoming from './pages/Upcoming';


import './App.css';




export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
{/* English Pages */}
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/mycleanups" component={MyCleanUps}/>
          <Route path="/create_event" component={CreateEvent}/>
          <Route path="/upcoming" component={Upcoming}/>
          <Route exact path="/cleanups" component={CleanUps}/>
          <Route path="/cleanups/:id" component={CleanDetail}/>
          {/* <ProtectedRoute 
            redirectUrl='/signup' 
            path="/create_event" 
            component={CreateEvent}
          /> */}
          <Route path="/profile" component={Profile}/>
          <Route path="/create_event" component={CreateEvent}/>
          {/* <ProtectedRoute 
            redirectUrl='/login' 
            path="/profile" 
            component= {Profile}
          /> */}
        </Switch>
        
      </div>
    )
  }
}

