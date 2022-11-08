import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [imageOfDay, setImageOfDay] = useState({});
  // Call axios function

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=nhOsVQVOsPxhFgDCWhJ0yiZSmlVlZnhXdaM7Ype0`
      );
      // Set state of Data
      setImageOfDay(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Today's Astronomy Image of the Day</h1>
      <article>
        {" "}
        <h2>{imageOfDay.title}</h2>
        <div>
          <img src={`${imageOfDay.url}`} alt="Image" height="450" width="700" />
          <p>{imageOfDay.explanation}</p>
          <p>
            {imageOfDay.copyright} {imageOfDay.date}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Home;
