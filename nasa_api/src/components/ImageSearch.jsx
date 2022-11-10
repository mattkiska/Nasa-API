import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function ImageSearch() {
  const [nasaImage, setNasaImage] = useState({})
  const [search, setSearch] = useState("")
  const [searchItems, setSearchItems] = useState([])

  const color = "white"
  const border = "1px solid white"

  // Call axios function

  useEffect(() => {
    if (search.length > 0) {
      getData()
    }
  }, [search])

  async function getData() {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${search}`
      );
      setNasaImage(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (nasaImage.collection) {
      setSearchItems(nasaImage.collection.items);
    }
  }, [nasaImage]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Search NASA's Image Library</h2>
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            type="text"
            id="search"
            label="search here"
            variant="outlined"
            onChange={handleChange}
            value={search}
            sx={{
              svg: { color },
              input: { color },
              label: { color },
              color: { color },
              border: { border },
            }}
          />
          
        </Box>
      </div>

      <div className="searchResults"></div>
      {searchItems.map((item) => {
            if (item && item.links && item.links[0] && item.links[0].href) {
              return (
                <div className="card"
                key={item.href}>
                  <img src={item.links[0].href} alt="nasa" width="450px" height="300px"/>
                  <h2>{item.data[0].title}</h2>
                  <p>{item.data[0].description}</p>
                </div>
              );
            }
          })}
    </div>
  );
}
export default ImageSearch
