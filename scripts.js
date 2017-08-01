 
var concertLatitude;	//stores  the concerts's latitude
var concertLongitude;   //stores the concert's longitude
var thumbnailPic;		//stores the artist's image
var concertDate;		//stores the date of the concert 

var marker;				//stores a single marker
var markers = [];		//stores all the markers in the map
var counter = 0;		//counts the number of searches that have been made


var artistConcerts = []; //stores the data collected from the api request 
var theMap;			 	//the google map 



//initializes the map
 function initMap() {

 		//map center location
        var mapCenter = {lat: 24.2992, lng: -24.6973};

        //add the map to the website
        theMap = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: mapCenter
        });

        console.log("Made the map!");
}



function makeTextBox(i){	//this function makes the info box that appears everytime you click on a marker 

        //constructing the string that will go in the text box 
        var concertInfo = '<div id="concert">'
        					+ '<h1 id="concertTitle">'
        					+ artistConcerts[i].title
        					+ '</h1>'
        					+ '<img id="thumbPic" height="84" width="84" src ="'
        					+ artistConcerts[i].artists["0"].thumb_url
        					+ '">'
        					+ artistConcerts[i].formatted_datetime
        				 + '</div>';
        //}

        return concertInfo;

}

function makeMarkers(){	//this function creates the markers that will appear on the map

	//checks if there are already markers on the map
	if (counter >1){
	console.log("Counter is more than 1");
		removeMarkers();
	}

	//creates info window
	var infowindow = new google.maps.InfoWindow();


	//creating and putting the markers on the map
    for(var i =0; i < artistConcerts.length; i++){
	    	var myLatLng = {lat: artistConcerts[i].venue.latitude, lng: artistConcerts[i].venue.longitude};
	    	marker = new google.maps.Marker({
	     		position: myLatLng,
	     		map: theMap,
	     		title: artistConcerts[i].title
	    	});

    		markers.push(marker); //adding current marker to the marker array

	    	google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(makeTextBox(i));
	          infowindow.open(map, marker);
	        }
	     })(marker, i));
    } // this is where the for loop ends

    console.log(markers);


    //sets the map on all of them

}

function removeMarkers(){

	console.log("removeMarkers was called");

     function setMapOnAll(theMap) {
     	for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(theMap);
        }
      }

	setMapOnAll(null);
	markers = [];
}





//function that will get called when user wants to see all the concerts in 2016
function getBandsInTownData2016(theInputValue){


	console.log("About to get Bands in Town Data");
	console.log("theInputValue");

	//constructing string for the API request
	var bandsURL = "https://api.bandsintown.com/artists/";
	var artist = theInputValue; 
	var contbandsURL = "/events.json?api_version=2.0&app_id=MUSIC_TRAVELS&date=";
	var startDate = "2016-01-01,"; 
	var endDate = "2016-12-31";

	//putting string together 
	var bandsSearchURL = bandsURL + artist + contbandsURL + startDate + endDate;

	console.log(bandsSearchURL);

	//API request
	$.ajax({
		url: bandsSearchURL,
		type: 'GET',  
		dataType: 'jsonp', 
		error: function(err){
			console.log("Oh no");
			console.log(err);
		},
		success: function(data){
			console.log("Well done!");
			console.log(data);

			artistConcerts = data;

			if (artistConcerts.errors){
				alert("Sorry, we don't know that artist!");
			}

			if (artistConcerts.length === 0){
				alert("No concerts to show!");
			}
			makeMarkers();
		}
	});
}

//function that will get called when user wants to see all the concerts in 2016
function getBandsInTownDataUpcoming(theInputValue){

	console.log("About to get Bands in Town Data");

	//constructing string for the API request
	var bandsURL = "https://api.bandsintown.com/artists/";
	var artist = theInputValue; 
	var contbandsURL = "/events.json?api_version=2.0&app_id=MUSIC_TRAVELS";

	//putiting everything together
	var bandsSearchURL = bandsURL + artist + contbandsURL;


	$.ajax({
		url: bandsSearchURL,
		type: 'GET',  
		dataType: 'jsonp', 
		error: function(err){
			console.log("Oh no");
			console.log(err);
		},
		success: function(data){
			console.log("Well done!");
			console.log(data);

			artistConcerts = data;

			if (artistConcerts.errors){
				alert("Sorry, we don't know that artist!");
			}

			if (artistConcerts.length === 0){
				alert("No concerts to show!");
			}
			console.log(artistConcerts);
			makeMarkers();
		}
	});
}

$(document).ready(function(){
	console.log("Ready!");

});

//event listener for button labeled "search all concerts in 2016"
$('#the-button').click(function(){
	console.log("Button is being pressed!");

	//grab the value from the input box	
	var theInputValue = $('#the-input').val();
	console.log(theInputValue);
	//Get the band
	getBandsInTownData2016(theInputValue);
	counter++;

});

//event listener for button labeled "search upcoming concerts"
$('#the-button2').click(function(){
	console.log("Button is being pressed!");

	//grab the value from the input box	
	var theInputValue = $('#the-input').val();
	console.log(theInputValue);
	//Get the band
	getBandsInTownDataUpcoming(theInputValue);
	counter++;

});
