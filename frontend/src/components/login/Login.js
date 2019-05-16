import React, { Component } from 'react'
import WrappedNormalLoginForm from './LoginForm'
import Navbar from '../Navbar'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{width: '50vw'}}>
          <WrappedNormalLoginForm {...this.props} handleInputs={this.handleInputs} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}