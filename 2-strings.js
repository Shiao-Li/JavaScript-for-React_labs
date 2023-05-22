// Creacion de String

'use strict';

let Nombre = "Roberto, Li Fong", Apellido = 'Shiao', Edad = '21';

console.log(`Hola, mi nombres es ${Nombre}, mi apellido es ${Apellido}, y tengo ${Edad} años`);

// Metodos de strings

console.log("\nLongitud: " + Nombre.length);
console.log("Mayúsculas: " + Nombre.toUpperCase());
console.log("Minúsculas: " + Apellido.toLowerCase());
console.log("Carácter en la posición 0: " + Nombre.charAt(0));
console.log("Subcadena desde la posición 0 hasta 4: " + Apellido.substring(0, 4));
console.log("Split por ', ': " + Nombre.split(", "));
console.log("Índice de 'Roberto': " + Nombre.indexOf("mundo"));
console.log("Reemplazar 'Roberto' por 'Juan': " + Nombre.replace("Roberto", "Juan"));


