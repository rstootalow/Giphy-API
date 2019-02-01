// APP VARIABLES - Actors

var actors = ["Robert DiNero", "Al Pacino", "Nicholas Cage", "Josh Brolin", "Ryan Renolds", "Hugh Jackman", "Michelle Pfier", "Jennifer Lawrence", "Melissa McCarthy", "Robert Downey Jr.", "Marc Ruffalo"];

//function to dynamically create buttons on html
function buttonCreate() {
    $("#buttons").empty();
    for (var i = 0; i < actors.length; i++) {
        var btn = $("<button>");
        btn.addClass("actor-button");
        btn.attr("data-name", actors[i]);
        $("#buttons").append(btn);
    };
}



//API CREDS
function gifInfo() {
    var apiKey = "I4J6THgSbr8lVICfhcpWKlgKpS957dTP"; 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actors + "&api_key=" + apiKey + "&rating&limit=10";

    //AJAX Request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // var actorDiv = $("<div class='actor'>");
        // var rating = response.rating;
        // var ratingScore
    });
}


//FUNCTION CALLS
buttonCreate();
gifInfo();