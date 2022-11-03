import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {

// Create state for our data
const [details, setDetails] = useState({})
let { index } = useParams()

// Call axios function

useEffect(()=> {
  const getData = async () =>{
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=qScrjgfg2SmiWnkoTft6brV7Q8DeTfgFNYy86LlN`)
  console.log(response.data)
  // Set state of Data
  setDetails(response.data)
  }
  getData()
},[details, index])


// see the data
console.log(details)

// Call Guard operator to protect from loading errors

if (!details){
  return <h2> Loading please wait</h2>
} else {
  return (
    <div>
      <h2>Todays Image</h2>
      <input type="date" className="imageSearch" placeholder="Choose a Date"/>
      <div className="image-container">
        <div>
          <img src={`${details.url}`} alt="Image" height="300" width="400"/>
      </div>
        <div>
          <img src={`${details.url}`} alt="image" height="300" width="400"/>
        </div>
      </div>
    </div>
  )}
}

export default Details