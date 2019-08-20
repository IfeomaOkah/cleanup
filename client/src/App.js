import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Air from './pages/Air';
import Water from './pages/Water';
import Principio from './pages/Principio';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import ProtectedRoute from './components/ProtectedRoute';
import Cleanups from './pages/Cleanups';


import './App.css';




export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
{/* English Pages */}
          <Route exact path="/" component={Landing}/>
          <Route path="/air" component={Air}/>
          <Route path="/water" component={Water}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/create_event" component={CreateEvent}/>
          <Route path="/cleanups" component={Cleanups}/>
          <ProtectedRoute 
            redirectUrl='/signup' 
            path="/create_event" 
            component={CreateEvent}
          />
          <ProtectedRoute 
            redirectUrl='/login' 
            path="/profile" 
            component= {Profile}
          />
   


{/* Spanish Pages */}
          <Route exact path="/es" component={Principio}/>
        </Switch>
        
      </div>
    )
  }
}

