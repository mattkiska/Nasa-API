import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Home() {

  const [imageOfDay, setImageOfDay] = useState({})

  // Call axios function
  
  useEffect(()=> {
    const getData = async () =>{
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=qScrjgfg2SmiWnkoTft6brV7Q8DeTfgFNYy86LlN`)
    // Set state of Data
    setImageOfDay(response.data)
    }
    getData()
  },[])

  return (
    <div>
        <h2>
            Today's Astronomy Image of the Day
        </h2>
        <div>
        <img src={`${imageOfDay.url}`} alt="Image" height="500" width="800"/>
        </div>
    </div>
  )
}

export default Home