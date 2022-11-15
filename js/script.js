
/*let askCity = prompt('Enter a city?');

let paris =  {
        name: 'Paris',
        temp: Math.round(29.5),        
        humidity: '60%'
    } ;
let tokyo = {
        name: 'Tokyo',
        temp: Math.round(26.1),
        humidity: '66%'
    };
let kiev = {
        name: 'Kiyv',
        temp: Math.round(30.7),
        humidity: '70%' 
    };

let temperatureParis = paris.temp;
let fahreinheitTempParis =  Math.round( temperatureParis * 9 / 5 ) + 32;

let temperatureTokyo = tokyo.temp;
let fahreinheitTempTokyo =  Math.round( temperatureTokyo * 9 / 5 ) + 32;

let temperatureKiyv = kiev.temp;
let fahreinheitTempKiyv =  Math.round( temperatureKiyv * 9 / 5 ) + 32;

if(askCity == 'paris'|| askCity == 'Paris' || askCity == 'PARIS') {
    alert(`It is currently ${paris.temp}°C (${fahreinheitTempParis}°F) in ${paris.name} with a humidity of ${paris.humidity}`);    
}else if(askCity == 'tokyo' || askCity == 'Tokyo' || askCity == 'TOKYO') {
    alert(`It is currently ${tokyo.temp}°C (${fahreinheitTempTokyo}°F) in ${tokyo.name} with a humidity of ${tokyo.humidity}`);
}else if( askCity == 'kiyv' || askCity == 'Kiyv' || askCity == 'KIYV') {
    alert(`It is currently ${kiev.temp}°C (${fahreinheitTempKiyv}°F) in ${kiev.name} with a humidity of ${kiev.humidity}`);
}else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${askCity}`);
};   */

//----------------------//

let now = new Date();

      let span = document.querySelector(".place-span");

      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let year = now.getFullYear();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[now.getDay()];

      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[now.getMonth()];

      span.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

//----------------------//


function getPlace (event) {
    event.preventDefault(); 
    let place = document.querySelector('#main__input'); 
    let mainPlace = document.querySelector('.main__place-place');
    //console.log('ok');
    mainPlace.innerHTML = place.value;
    
}
let form = document.querySelector("#form");

form.addEventListener("submit", getPlace);

//----------------------//

let temperature = 17;

function showTempFarent (event) {
    event.preventDefault();
    let temp = document.querySelector('.deg-number');
    let tempFaren = Math.round( temperature * 9 / 5 ) + 32;
    temp.innerHTML = tempFaren;
    console.log('ok')
}
showTempFarent();
// let fahrenheit = document.querySelector('#fahrenheit');
// fahrenheit.addEventListener('click', showTempFarent);