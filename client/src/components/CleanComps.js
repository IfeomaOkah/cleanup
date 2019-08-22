import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CleanComps extends Component {
  constructor(){
    super()
    this.state = {
        btnText: "Join CleanUp",
        btnClass: "joinBtn"
    }
}
  render() {
    return ( 
      <div className="border" key={this.props.cleanup._id}>
        <Link 
          to={`/cleanups/${this.props.cleanup._id}`}>
          <h1>{this.props.cleanup.headline}</h1>
        </Link>
          <p>{this.props.cleanup.description}</p>
          <div>{this.props.cleanup.image_url}</div>
          <button className={this.state.btnClass} onClick={() => {this.props.join(this.props.cleanup._id); this.setState({btnText: "Joined!", btnClass: "pushedBtn"})}} >{this.state.btnText}</button>
      </div> 
    )
  }
}
