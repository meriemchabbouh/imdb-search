var baseUrl = 'http://www.omdbapi.com/?apikey=9a301d8b&plot=full&r=json&t=';

$('#search').click(function () {
    var name = $('#name').val();
    $.getJSON(baseUrl + name, function (data, status) {
        if (typeof(data.Title) !== 'undefined') {
            $("#result").html(generateMovieTemplate(data));
        } else {
            $("#result").html('<h1>No Movie Found!</h1>');
        }

    });
});

$('#clear').click(function () {
    $('#name').val('');
    $("#result").html('');
});

function generateMovieTemplate(movie) {
    var template =
        '<div class="col-md-12">' +
        '<div class="thumbnail">' +
        '<img src="' + movie.Poster + '">' +
        '<div class="caption">' +
        '<h3>' + movie.Title + '</h3>' +
        '<p>' + movie.Plot + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    return template;
}