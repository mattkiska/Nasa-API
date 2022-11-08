# Nasa-API

This site is dedicated to utilizing the [NASA Government API](https://https://api.nasa.gov/)

## Table of Contents
1. [Home Page](#home_page)
2. [More APOD's](#more_apods)
3. [Nasa Images Search](#nasa_images_search)

## Home Page <a name="home_page"></a>
When opening the webpage you are greeted by today's Astronomy Image of the Day, a description about the image, todays date, as well as whom owns the copyright (if applicable). This was done using NASA's APOD Api. To create this I made a useEffect funtion to create an axios call to https://api.nasa.gov/planetary/apod?api_key="DEMO_API_KEY". Then returned the data for the Image, Description, and Date.

## More APOD's <a name="more_apods"></a>