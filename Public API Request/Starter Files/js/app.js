var directory = new XMLHttpRequest();
directory.onreadystatechange = function () {
    if(directory.readyState === 4){
        let employees = JSON.parse(directory.responseText);
        let employeeList = employees.results;
        
        for(let i = 0; i < employeeList.length; i++){
        dirHTML = '<div class="card">'
        dirHTML += '<div class="card-img-container">'
        dirHTML += '<img class="card-img" src="' + employeeList[i].picture.large +'" alt= "bird">'
        dirHTML += '</div>' // img-container
        dirHTML += '<div class="card-info-container">'
        dirHTML += '<h3 id="name" class="card-name cap">' + employeeList[i].name.first + ' ' + employeeList[i].name.last + '</h3>'
        dirHTML += '<p class="card-text">' + employeeList[i].email + '</p>'
        dirHTML += '<p class="card-text cap">' + employeeList[i].location.city + ', ' + employeeList[i].location.state + '</p>'
        dirHTML += '</div>' // info-container
        dirHTML += '</div>' //  card
        document.getElementById('gallery').innerHTML += dirHTML;
        }

    }
};

directory.open('GET', 'https://randomuser.me/api/?results=12');
directory.send();
