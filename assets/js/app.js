$(document).ready(function(){
    var topics = [];
    
    // function to call giphy api
    function gifInfo() {
        $('button').on('click', function() {
        $('#gif-container').empty();
        var search = $(this).attr('data-search');
        // console.log(search); //TEST
        //variable for API Key
        var apiKey = 'I4J6THgSbr8lVICfhcpWKlgKpS957dTP';
        // variable for GIPHY search query
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + apiKey + '&rating&limit=10';

        // Start of AJAX Call
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function(response){
            var results = response.data;

            // for loop that iterates over the results and dynamically creates necessary divs
            for (var j = 0; j < results.length; j++) {
                var showDiv = $('<div class="inline">');
                var rating = results[j].rating.toUpperCase();
                var defaultAnimatedImg = results[j].images.fixed_height.url;
                var staticImg = results[j].images.fixed_height_still.url;
                var showImage = $('<img>');
                var p = $('<p>').text('Rating: ' + rating);
                // adding necessary attributes to link correct data to each targeted element
                showImage.attr('src', staticImg);
                showImage.addClass('actorGif');
                showImage.attr('data-state', 'still');
                showImage.attr('data-still', staticImg);
                showImage.attr('data-animate', defaultAnimatedImg);
                showDiv.append(showImage);
                showDiv.append(p);
                $('#gif-container').prepend(showDiv);
            }
        });
    })
} // end of for loop

function displayButtons() {
    $('#buttons').empty();
    for (var j = 0; j < topics.length; j++) {
        var btn = $('<button>');
        btn.attr('id', 'actor');
        btn.attr('data-search', topics[j]);
        btn.text(topics[j]);
        $('#buttons').append(btn);
    }
}
// functionality for search button click to also populate gifs
    $('#addActor').on('click', function(event){
        event.preventDefault();
        var newActor = $('#actorInput').val();
        topics.push(newActor);
        console.log(topics); // TEST
        // $('#actorInput').val();
        displayButtons();
    });

    

    // displayButtons();

    $(document).on('click', '#actor', displayButtons);

    $(document).on('click', '.actorGif', pausePlayGifs);

    // pause or play function for gifs on click

    function pausePlayGifs() {
        var movement = $(this).attr('data-state');
        if (movement === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        }
    }

    gifInfo();
    displayButtons();
    pausePlayGifs();

})

