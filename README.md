# Nasa-API

This site is dedicated to utilizing the [NASA Government API](https://https://api.nasa.gov/)

## Table of Contents
#### The 3 Main components of the webpage are:

1. [Home Page](#home_page)
2. [More APOD's](#more_apods)
3. [NASA Images Search](#nasa_images_search)
4. [Conclusion](#conclusion)

## Home Page <a name="home_page"></a>
When opening the webpage you are greeted by today's Astronomy Image of the Day, a description about the image, todays date, as well as whom owns the copyright (if applicable). This was done using NASA's APOD Api. To create this I made a useEffect funtion to create an axios call to https://api.nasa.gov/planetary/apod?api_key=DEMO_API_KEY. Then returned the data for the Image, Description, and Date.

## More APOD's <a name="more_apods"></a>
The More APOD's link will allow you to select any date and as long as that date has an image posted you will return the Image, a description, the date and a copyright if applicable. This was a bit trickier than the Home Page due to neegint to be able to select a date and update that date to the end of the api call. https://api.nasa.gov/planetary/apod?api_key=DEMO_API_KEY&date= . I utilized a Date Picker from [Mui.com](https://mui.com/x/react-date-pickers/date-picker/) this date picker did create some challenges as it would turn the date selected into an object, which I then had to turn into a string and format properly to work with NASA's api.
```
onChange={(date) => {
setDate(date.format("YYYY-MM-DD").toString());
}}
```


## NASA Images Search <a name="nasa_images_search"></a>
The Image Search allows you to search any phrase and it will return the any images in NASA's database that match your search. The image search also gives a brief explanation along with the images provided.

This was definitely the hardest part of this project. Most of the trouble came with the search function. I ran into issues with the way the API was formatted and I had to change the way I was used to writing API calls. I also had to create 2 separate useEffects for things to run smoothly. 
This useEffect was to make sure that if the search entered didn't return anything that it would not preform the getData function and then cause the page to crash.
```
useEffect(() => {
    if (search.length > 0) {
      getData()
    }
  }, [search])
```
After the functions are called and the data is being returned I had some trouble showing the proper data as well as how to properly map through the data.

I wrote this piece of code to map through the data and verify that all of the items I am looking for are present. 
```
{searchItems.map((item) => {
    if (item && item.links && item.links[0] && item.links[0].href) {
    return (
```

## Conclusion <a name="conclusion"></a>
All-in-all this project was really fun and a great way to utilize all of the skills I have learned thus far in my first month and a half of coding. I included links to my socials at the bottom of the page if you would like to reach out or see any more of my projects. Feel free to fork and clone this repository to mess with the code yourself!

### Thanks!
