function weatherCalculation()
{ 
var TempFah = prompt("What is the temperature in Fahrenheit? ");

var TempCel = (TempFah - 32) * (5/9);
var TempCelFinal = TempCel.toFixed(1)

console.log("The temperature in Celsius is: " + TempCelFinal)
output.textContent = weatherCalculation()

}
