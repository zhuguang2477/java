function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log(celsiusToFahrenheit(30)); 
console.log(fahrenheitToCelsius(86));