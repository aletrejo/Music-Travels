MUSIC TRAVELS
=============

[Live site](http://atr313.nyuad.im/music/ "Music Travels")


For project #1 our goal was to create a website that, upon user input, would respond with data from 2 different APIs. Based on this criteria, I decided to develop Music Travels, a website that allows people to check where their favorite artists will have concerts soon and where they have been in 2016.

In order to make Music Travels happen I used the Bands in Town API along with the Google Maps API. I got all the artist information like pictures, concert dates and venue locations from the Bands in Town API and then I passed in this information to the Google Maps API to make a map that showed users the places where concerts had been held or will be held.

My inspiration to make Music Travels is that whenever I travel, one of the first things I do is check out gigs that will be happening in the city I’ll be visiting. Also, I have quite a few friends that are willing to travel just to see an act perform. I’ll be the first to admit that there already exist services that track where artists will be performing. However, these websites usually show users long lists of concert dates and venues. I’m a very visual person so having to go through long lists of concerts isn’t ideal for me. That’s why I thought that it would be really cool if you could have a map where you visualize the same information. In fact, I thought that finding because it’s easier just to locate a country in map then having to scroll down through a page.

After listing out my reasons why I made Music Travels it seems kind of weird that my finished product doesn’t have the ability to search by city and just allows you to search by artist. Originally, my idea was to have both features available. At first, I looked at Bands in Town’s API but I quickly realized that they didn’t offer an option to search by city, just by artist. Then, I did some googling and I found Songkicker’s API. They do offer the ability to search by city but they require you to apply for an API key and that process was long. Another API I considered was Seatgeek’s API, which seemed very promising. However, after working with it I realized that it didn’t have a lot of information on concerts happening outside the US and Canada so I completely dropped the idea of searching by city.

Once I had decided to have artist search only, I began building the page by breaking up the project into small functions that together would make the page work. My first step was to get the artist information from the Bands in Town API. This was relatively easy as I just needed to plug the artist’s name from the search box in my website into the URL for the API request.

My next step was to decide what to do with all the data I was receiving from the API request. I decided just to use 5 attributes: formatted title, formatted date, latitude, longitude and the thumbnail picture of the artist. After making this decision, I wondered what would be the best data structure to store all my data. Finally, I decided just to save all the data I received from my API request and just access the attributes I needed.

Once the Bands in Town part of the experience was sorted out. I started working with the Google Maps API. First thing I did was just displaying a map on my page which was easy. The actual heavy work was making and deleting the markers.

Making the markers was done by iterating through all the objects the Bands in Town API returned, taking the latitude and longitude of each concert to make a new marker and then add it to the map.

Next up, I worked on making the info boxes that appear every time you click on any marker on the page. I’m particularly proud of these info boxes. I thought that it would take me a long time to get it working but compared to everything else it was a pain-free experience. I just needed to make a string with all the information I wanted to display in the boxes.

After testing my page I quickly realized that I needed to find a way to delete the markers. Deleting the markers took me quite some time. It involved using several functions but with the help of Craig I did it.

The very last step was just to make the overall user experience better. I focused on having the users receive feedback when the artist they entered didn’t exist in the Bands in Town API or when there were no concerts to display. I didn’t want them to stand in front of their screens wondering why nothing happened on the page. That’s why I decided to have a pop up box whenever there was no data to display.

In the future, I’d like to actually implement searching by city. Another awesome idea that my professor suggested is a recommendation system so that’s also in the To-Do list. Still, I’m pretty happy with how my website turned out as I did accomplish my goal of visualizing concert information.
