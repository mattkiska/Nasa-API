import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import MoreImages from "./MoreImages"
import ImageSearch from "./ImageSearch"

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoreImages" element={<MoreImages />} />
        <Route path="/ImageSearch" element={<ImageSearch />} />
      </Routes>
    </div>
  );
}

export default Main;
