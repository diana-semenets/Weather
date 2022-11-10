
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

let temperatureParis = paris.temp;
let fahreinheitTempParis =  ( temperatureParis * 9 / 5 ) + 32;

let temperatureTokyo = tokyo.temp;
let fahreinheitTempTokyo =  ( temperatureTokyo * 9 / 5 ) + 32;

let temperatureKiyv = kiev.temp;
let fahreinheitTempKiyv =  ( temperatureKiyv * 9 / 5 ) + 32;

if(askCity == 'paris') {
    alert(`It is currently ${paris.temp}°C (${fahreinheitTempParis}°F) in ${paris.name} with a humidity of ${paris.humidity}`);    
}else if(askCity == 'tokyo') {
    alert(`It is currently ${tokyo.temp}°C (${fahreinheitTempTokyo}°F) in ${tokyo.name} with a humidity of ${tokyo.humidity}`);
}else if( askCity == 'kiyv') {
    alert(`It is currently ${kiev.temp}°C (${fahreinheitTempKiyv}°F) in ${kiev.name} with a humidity of ${kiev.humidity}`);
}else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${askCity}`);
};
