let celsiusVar;

function setCelsius(num){
    celsiusVar = num
}

function getCelsius(){
    return celsiusVar
}

function celsiusToKelvin(){
    return celsiusVar + 273.15
}

function celsiusToFahrenheit(){
    return (celsiusVar*1.8)+32
}

setCelsius(30)

console.log(celsiusToFahrenheit());
console.log(celsiusToKelvin())