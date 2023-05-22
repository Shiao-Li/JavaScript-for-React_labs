// Operadores

'use strict'
const suma = 5 + 3.63;
const resta = 7 - 2;
const multiplicacion = 4 * 6;
const division = 10 / 2;
const modulo = 7 % 3;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);

// Incremento y decremento
console.log('\n')
let num = 5;
console.log("Valor original: " + num);
console.log("Incremento: " + (++num));
console.log("Decremento: " + --num);

// Metodo .Math
console.log('\n')
console.log(Math);
console.log(Math.PI);
console.log(Math.round(suma));
console.log(Math.sqrt(suma));
console.log(Math.abs(-suma));
console.log(Math.pow(suma,5));
console.log(Math.min(suma,4));
console.log(Math.max(suma,-4));
console.log(Math.round(Math.random()*20));

// Conversion o cast


'use strict';

console.log('\n')
console.log(Number.parseInt(suma));
console.log(Number.parseFloat(resta));

console.log(Number.isInteger(suma));

console.log(`${+suma + +resta}`);