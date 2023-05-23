'use strict'

// paso de parámetros una funcion
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludar("Roberto");

// paso por defecto
function saludar(nombre = "Shiao") {
    console.log("¡Hola, " + nombre + "!");
  }
  
saludar();

// parametros rest
function sumar(...numeros) {
    let total = 0;
    for (let numero of numeros) {
      total += numero;
    }
    return total;
  }
  
  console.log(sumar(1, 2, 3, 4, 5));