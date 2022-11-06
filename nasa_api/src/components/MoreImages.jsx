import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

function Details() {
  // Create state for our data
  const [details, setDetails] = useState(null);
  const [date, setDate] = useState("2022-05-01");

  // Call axios function

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${nasaEndpoint}planetary/apod?api_key=${nasaApiKey}&date=${date}`
      );
      setDetails(response.data);
    };

    getData();
  }, [date]);

  // Call Guard operator to protect from loading errors

  if (!details) {
    return <h2> Loading please wait</h2>;
  } else {
    return (
      <div>
        <h2></h2>
        <div className="datePicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Enter Date"
            value={date}
            onChange={(date) => {
              setDate(date.format("YYYY-MM-DD").toString());
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </div>
        <div className="image-container">
          <div>
            <h2>{details.title}</h2>
            <img src={`${details.url}`} alt="image" height="400" width="650" />
            <p>{details.explanation}</p>
            <p>
              {details.copyright} {details.date}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
