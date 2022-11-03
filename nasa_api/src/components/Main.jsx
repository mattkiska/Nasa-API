import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MoreImages from './MoreImages'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MoreImages" element={<MoreImages/>}/>
      </Routes>
    </div>
  )
}

export default Main