import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class ESNav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="link-logo"><img className="logo" src="/img/cleanup-logo.png" alt="img"/></Link>
        <Link className="link-main">crear una cuenta</Link>
        <Link className="link-main">iniciar sesiòn</Link>
        <Link to="/"className="link-main">english</Link>   
      </div>
    )
  }
}
