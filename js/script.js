
let askCity = prompt('Enter a city?');

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
  

if(askCity == 'paris') {
    alert(`It is currently ${paris.temp}°C in ${paris.name} with a humidity of ${paris.humidity}`);    
}else if(askCity == 'tokyo') {
    alert(`It is currently ${tokyo.temp}°C in ${tokyo.name} with a humidity of ${tokyo.humidity}`);
}else if( askCity == 'Kiyv') {
    alert(`It is currently ${kiev.temp}°C in ${kiev.name} with a humidity of ${kiev.humidity}`);
}else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${askCity}`);
};
