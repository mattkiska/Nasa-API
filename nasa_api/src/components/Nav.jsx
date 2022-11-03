import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="navbar">
      <Link to ="/">Home</Link>
      <Link to ="/Details">Details</Link>

    </div>
  )
}

export default Nav