$(document).ready(function () {
    console.log("Hello World")

    //Create Settings Variable to pass into Ajax Function
    var genre = "";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ott-details.p.rapidapi.com/advancedsearch?end_year=2020&start_year=2019&min_imdb=6&page=1&genre=action&type=movie&language=english&sort=highestrated",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "18270a6435mshc7de6892f83a3d1p10f31ejsn44394324a00e"
        }
    }
    
    $.ajax(settings).done(function (response) {
        // console.log(response.results[0]);
        console.log("Movie Title: " + response.results[0].title);
        console.log("IMDB Rating: " + response.results[0].imdbrating);
        console.log("Synopsis: " + response.results[0].synopsis);
    });
});
