import React, { Component } from 'react';
import MainLayout from '../layout/mainlayout';
import AuthService from '../utilities/AuthService';
const auth = new AuthService();

export default class Cleanup extends Component {
  constructor(){
    super()
    this.state = {
        cleanups: []
    }
}

componentDidMount() {
    this.setState({cleanups: auth.getEvent()
    })

}

  render() {
    return (
      <div>
        <MainLayout>
        {this.state.cleanups.map(cleanup => <h1>{cleanup.headline}</h1>)}
        </MainLayout>
      </div>
    )
  }
}
