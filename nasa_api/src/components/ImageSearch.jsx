import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ImageSearch() {
  const [nasaImage, setNasaImage] = useState({});
  const [search, setSearch] = useState("");

  const color = "white";
  const border = "1px solid white";

  // Call axios function

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${search}`
      );
      // Set state of Data
      setNasaImage(response.data);
    };
    getData();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    event.preventDefault();
    console.log("value is:", event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
  }

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

      <div className="searchResults">
        <h3>{search.url}</h3>
      </div>
    </div>
  );
}
export default ImageSearch;
