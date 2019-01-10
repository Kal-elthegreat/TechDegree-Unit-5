let responseResults;
$(document).ready(function(){
  //     GALLERY SECTION

    var url = 'https://randomuser.me/api/?nat=us&results=12&exc=gender,login,registered,id'
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
            responseResults = response.results // store response data for later use
    }) // getJSON

});// end ready

  ////    MODAL POP-UP ////

//create container
const modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
document.body.append(modalContainer);

// create modal
const modal = document.createElement('div');
modal.className = 'modal';
modalContainer.append(modal);

// create close button
const closeButton = document.createElement('button');
closeButton.className = 'modal-close-btn';
closeButton.setAttribute('id', 'modal-close-btn')
closeButton.innerHTML = '<strong>X</strong>';
modal.append(closeButton);

// create info container
const infoContainer = document.createElement('div');
infoContainer.className = 'modal-info-container';
modal.append(infoContainer);

// create img tag
const img = document.createElement('img');
img.className = 'modal-img';
img.setAttribute('src','https://placehold.it/125x125'); // <-- change here
img.setAttribute('alt','profile picture');
infoContainer.append(img);

// create name 
const name = document.createElement('h3');
name.className = 'modal-name cap';
name.setAttribute('id', 'name');
name.textContent = 'name';  // <-- change here
infoContainer.append(name);

//create email
const email = document.createElement('p');
email.className = 'modal-text';
email.textContent = 'email';  // <-- change here
infoContainer.append(email);

// create city 
const city = document.createElement('p');
city.className = 'modal-text cap';
city.textContent = 'city';  // <-- change here
infoContainer.append(city);

// create line break
const lineBreak = document.createElement('hr');
infoContainer.append(lineBreak);

// create phone number
const phoneNumber = document.createElement('p');
phoneNumber.className = 'modal-text';
phoneNumber.textContent = '(555) 555-5555';  // <-- change here
infoContainer.append(phoneNumber);

// create address
const address = document.createElement('p');
address.className = 'modal-text cap';
address.textContent = '123 Portland Ave., Portland, OR 97204';  // <-- change here
infoContainer.append(address);

// create dob
const dob = document.createElement('p');
dob.className = 'modal-text';
dob.textContent = 'Birthday:';  // <-- change here
infoContainer.append(dob);

// set pop up to hide
$('.modal-container').hide()     

/*****  ******/

// closes pop-up
$('#modal-close-btn').on('click', function(){
    $('.modal-container').hide();
})

// opens window on click
$('#gallery').click(function(e){ // was unable to set click event on div.card as planned so this code is the result of improvisation
    const target = $(e.target)
    if(!target.hasClass('gallery')){ // ignore gallery class
        if(target.hasClass('card')){ // check for card class
            select = target.index(); // get index
        }
        if(target.parent().hasClass('card')){ // check if container
            select = target.parent().index(); // traverse once to get index of card
        }
        if(target.parent().parent().hasClass('card')){ // check if container child 
            select = target.parent().parent().index(); // traverse twice to get index of card
        }
        
        // use index to fill in card
    $('img.modal-img').attr('src', responseResults[select].picture.large);
    name.textContent = responseResults[select].name.first + ' ' +responseResults[select].name.last;
    email.textContent = responseResults[select].email;
    city.textContent = responseResults[select].location.city;
    phoneNumber.textContent = responseResults[select].cell;
    address.textContent = responseResults[select].location.street +', '+ responseResults[select].location.state +' '+ responseResults[select].location.postcode;
    dob.textContent = 'Birthday: ' + responseResults[select].dob.date.slice(0,10);
    $('.modal-container').show()
    }
});
