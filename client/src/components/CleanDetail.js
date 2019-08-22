import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthEvent from '../utilities/AuthEvent';
const eventUtils = new AuthEvent();

export default class CleanDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      cleanup: null
  }
}
  componentDidMount(){
    eventUtils.getEventDetails(this.props.match.params.id)
    .then(response => {
      console.log(response)
      // debugger
      this.setState({
        cleanup: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
 
  render() {
    return (
      <>
      {this.state.cleanup ?
        <div>
          <h1>{this.state.cleanup.title}</h1>
          <p>{this.state.cleanup.description}</p>
          <div>{this.state.cleanup.image_url}</div>
          <Link to={'/cleanups'}>Back to cleanups</Link>
        </div>:
        <p>Loading...</p>
      }
      </>
    )
  }
}
