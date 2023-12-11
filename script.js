document.addEventListener('DOMContentLoaded', function() {

  //JavaScript to retrieve and display the user's location  
 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
  
          // Call the reverse geocoding API with your API key
          var apiKey = '27fb908bb5a745dfb5dd6811a6474b67';
          var apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&language=en&pretty=1`;


          // Fetch data from the API
          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              // Extract city name from the API response
              var city = data.results[0].components.city;

              var country = data.results[0].components.country;

            //   var postcode = data.results[0].components.postcode;
              
              // Display the location on the webpage
              document.getElementById("locationOutput").innerHTML = city + ", " + country;
            })
            .catch(error => {
              console.error("Error fetching data:", error.message);
              document.getElementById("locationOutput").innerHTML =
                "Error getting location. Please try again later.";
            });
        },
        function (error) {
          console.error("Error getting location:", error.message);
          document.getElementById("locationOutput").innerHTML =
            "Error getting location. Please enable location services.";
        }
      );
    } else {
      document.getElementById("locationOutput").innerHTML =
        "Geolocation is not supported by your browser.";
    }


   //Back To Top

   var link = document.getElementById("backToTop");
   var topSection = document.getElementById("top")

    link.addEventListener("click", function(e){
      e.preventDefault();
      topSection.scrollIntoView({behavior: "smooth"})
    })
});
