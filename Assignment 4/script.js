/*
    Assignment 4
    Aarsal Masoodi 0688474
*/

$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function (position) {
		var newLat = position.coords.latitude;
		var newLong = position.coords.longitude;
        var oldLat = parseFloat(localStorage.getItem("latPrev"));       //I convert the values back from string to a float.
        var oldLong = parseFloat(localStorage.getItem("longPrev"));
	
		$('#youarehere').append("<p>Your current latitude and longitude are: " + newLat.toFixed(2) + " and " + newLong.toFixed(2)); //when I output numbers, I always round to 2 decimal places.
		
		if (localStorage.getItem("latPrev") !== null) {
			$('#youarehere').append("<p>Your previous location was: " + oldLat.toFixed(2) + " latitude and " + oldLong.toFixed(2) + " longitude.");
            var distance = calcDistance(newLat, newLong, oldLat, oldLong);
            $('#youarehere').append("<p>You have moved " + distance.toFixed(2) + " metres from your previous location.")
		
		}
		else {
			$('#youarehere').append("<p>Hello! Thank you for visiting for the first time!")
		}
		localStorage.setItem("latPrev", newLat);        //I set the current location values into the local storage. This also converts them into a string.
        localStorage.setItem("longPrev", newLong);
		
	
	}, function () {
		$('#youarehere').html("<p>Couldn't obtain your location!");
	});




    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


