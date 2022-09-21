function Converter() {
  var valorElemento = document.getElementById("temperatura");
  var temperatura = valorElemento.value;
  var valorEmCelsius = parseFloat(temperatura);
  
  var valorEmKelvin = valorEmCelsius +273.15;
  console.log (valorEmCelsius);
  
  var elementoTemperaturaConvertida = document.getElementById("temperaturaConvertida")
  var temperaturaConvertida = (" A temperatura em Kelvin é ") + valorEmKelvin + ("!")
  elementoTemperaturaConvertida.innerHTML = temperaturaConvertida
}

function Converter2() {
   var valorElemento = document.getElementById("temperatura2");
  var temperatura2 = valorElemento.value;
  var valorEmCelsius = parseFloat(temperatura2);
  
  var valorEmFahren = (valorEmCelsius*1.8) + 32;
  console.log (valorEmCelsius);
  
  var elementoTemperaturaConvertida2 = document.getElementById("temperaturaConvertida2")
  var temperaturaConvertida2 = (" A temperatura em Fahrenheit é ") + valorEmFahren + ("°!")
  elementoTemperaturaConvertida2.innerHTML = temperaturaConvertida2
}