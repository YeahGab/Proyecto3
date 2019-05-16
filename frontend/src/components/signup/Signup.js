import React, { Component } from 'react'
import WrappedRegistrationForm from './SignupForm'
import Navbar from '../Navbar'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{width: '50vw'}}>
        <WrappedRegistrationForm/>
        </div>
      </div>
    )
  }
}