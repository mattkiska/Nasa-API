import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ImageSearch() {
  const [nasaImage, setNasaImage] = useState({});
  // Call axios function

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=`
      );
      // Set state of Data
      setNasaImage(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default ImageSearch