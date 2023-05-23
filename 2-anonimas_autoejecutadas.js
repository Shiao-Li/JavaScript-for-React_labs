'use strict'
// Función anónima asignada a una variable
const sumar = function(a, b) {
    return a + b;
  };
  
  console.log(sumar(2, 3));
  
  // Función anónima como argumento de otra función (callback)
  const numeros = [1, 2, 3, 4, 5];
  numeros.forEach(function(numero) {
    console.log(numero);
  });


// Función autoejecutada
(function () {
        console.log("Esta función se ejecuta automáticamente");
    })();

// Función autoejecutada con parámetros
(function (a, b) {
    console.log("La suma es: " + (a + b));
})(2, 3);