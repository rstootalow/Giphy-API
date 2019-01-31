// APP VARIABLES - Actors

var topics = ["Robert DiNero", "Al Pacino", "Nicholas Cage", "Josh Brolin", "Ryan Renolds", "Hugh Jackman", "Michelle Pfier", "Jennifer Lawrence", "Melissa McCarthy", "Robert Downey Jr.", "Marc Ruffalo"];

//function to dynamically create buttons on html
function buttonCreate() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("actor-button");
        btn.attr("data-name", topics[i]);
        $("#buttons").append(btn);
    };
}

// on click function on button to interact with giphy API
function showGif() {
    for (var i = 0; i < topics.length; i++) {
        // on click event listener
    }   
        //call ajax method here so it runs on each button click
        // reference value of button on click so api knows what gifs to grab
        // limit search to 10 items for each button
        // 
}



//API CREDS

var apiKey = "I4J6THgSbr8lVICfhcpWKlgKpS957dTP";
var queryURL = "";

//FUNCTION CALLS
buttonCreate();