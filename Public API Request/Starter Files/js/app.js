$(document).ready(function(){
    var url = 'https://randomuser.me/api/?results=12'
    $.getJSON(url, function(response){
        $.each(response.results, function(index,employee){
            dirHTML = '<div class="card">'
            dirHTML += '<div class="card-img-container">'
            dirHTML += '<img class="card-img" src="' + employee.picture.large +'">'
            dirHTML += '</div>' // img-container
            dirHTML += '<div class="card-info-container">'
            dirHTML += '<h3 id="name" class="card-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>'
            dirHTML += '<p class="card-text">' + employee.email + '</p>'
            dirHTML += '<p class="card-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>'
            dirHTML += '</div>' // info-container
            dirHTML += '</div>' //  card
            document.getElementById('gallery').innerHTML += dirHTML;
        }) // end each
    }) // getJSON
});// end ready