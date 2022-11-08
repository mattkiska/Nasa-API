# Nasa-API

This site is dedicated to utilizing the [NASA Government API](https://https://api.nasa.gov/)

## Table of Contents
#### The 3 Main components of the webpage are:

1. [Home Page](#home_page)
2. [More APOD's](#more_apods)
3. [NASA Images Search](#nasa_images_search)

## Home Page <a name="home_page"></a>
When opening the webpage you are greeted by today's Astronomy Image of the Day, a description about the image, todays date, as well as whom owns the copyright (if applicable). This was done using NASA's APOD Api. To create this I made a useEffect funtion to create an axios call to https://api.nasa.gov/planetary/apod?api_key="DEMO_API_KEY". Then returned the data for the Image, Description, and Date.

## More APOD's <a name="more_apods"></a>
The More APOD's link will allow you to select any date and as long as that date has an image posted you will return the Image, a description, the date and a copyright if applicable. This was a bit trickier than the Home Page due to neegint to be able to select a date and update that date to the end of the api call. https://api.nasa.gov/planetary/apod?api_key="DEMO_API_KEY"&date= . I utilized a Date Picker from [Mui.com](https://mui.com/x/react-date-pickers/date-picker/) this date picker did create some challenges as it would turn the date selected into an object, which I then had to turn into a string and format as such 
```
onChange={(date) => {
setDate(date.format("YYYY-MM-DD").toString());
}}
```

## NASA Images Search <a name="nasa_images_search"></a>