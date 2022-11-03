import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Details" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default Main