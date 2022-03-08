function weatherCalculation()
{ 
var tempFah = document.getElementById("valor");
var value = tempFah.value;
var valueFahNum = parseFloat(value)

var tempCel = (valueFahNum - 32) * (5/9);
var tempCelFinal = tempCel.toFixed(1)

var tempCelConvert = document.getElementById("valorConvertido");
var valueConvert = "The temperature in Celsius is: " + tempCelFinal;
tempCelConvert.innerHTML = valueConvert;

}
