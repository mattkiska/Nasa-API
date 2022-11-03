import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
  return (
    <div className="navbar">
      <Link to ="/">Home</Link>
      <Link to ="/MoreImages">More Images</Link>

    </div>
  )
}

export default Nav