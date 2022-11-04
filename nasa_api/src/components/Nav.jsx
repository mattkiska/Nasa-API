import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
  return (
    <div className="navbar">
      <Link to ="/" className="navLink">Home</Link>
      <Link to ="/MoreImages" className="navLink">More Images</Link>
    </div>
  )
}

export default Nav