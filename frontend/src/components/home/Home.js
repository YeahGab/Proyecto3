import React from 'react'
import Navbar from '../Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="notification">
          <h1 id="titulo">Lorem ipsum dolor amet</h1>
          <div className="container2">
            <p id="firstHome" >Est nisi commodo consectetur esse culpa pariatur eiusmod. Occaecat consectetur sunt proident eiusmod ea enim laborum eiusmod proident. Cillum reprehenderit sunt cupidatat enim.</p>
          </div>
          <div className="miniForm">
          <input className="input" type="text" placeholder="Text input"></input>
          <button className="button buttonDefault" href="../signup/Signup.js">Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}
