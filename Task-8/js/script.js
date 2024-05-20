// Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function.

const celsiusToFahrenheit = (c) => {

    return (f = (c * 1.8) + 32);
}

let f, c = 80;

f = celsiusToFahrenheit(c);

document.getElementById("celsius").innerHTML = (`Celsius = ${c} To Fahrenheit = ${f}`);