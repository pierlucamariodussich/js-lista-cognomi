// Riporto gli INPUT

var writeSurname = prompt("Inserisci il tuo cognome") ;
var  surname = [ "Bianco", "Rosso", "Verdone", "Fumagalli"];
var surnameList = document.getElementById('list');
var positionResult = document.getElementById('position');
surname.push(writeSurname);
surname.sort();

 var positionUser  = 0;


// controllo intermedio
// console.log(surname);

//  operazioni Logiche

for ( i = 0; i < surname.length; i++) {

    surnameList.innerHTML += "<li>" + surname[i] + "</li>";


    if (surname[i] == writeSurname){
       positionUser = i;

    }

}

document.getElementById("position").innerHTML += (positionUser  + 1 );
