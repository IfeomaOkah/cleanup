import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../utilities/AuthService';
const auth = new AuthService();

const ProtectedRoute = ({component: Component, redirectUrl, ...rest}) => {  
  return (
    <Route
      {...rest}
      render={ props  => {
      var user = auth.getUser();
        if(user){
          return <Component {...props} />
        } else {
          return <Redirect to={{pathname: redirectUrl || '/', state: {from: props.location}}} />
            }
        }
        }
      />
    )
}
export default ProtectedRoute;