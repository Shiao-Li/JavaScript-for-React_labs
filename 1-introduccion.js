// Spread operator

'use strict';

const paises1 = ["España", "Francia", "Italia", "Ecuador"];
const paises2 = ["Alemania", "Reino Unido", "Portugal"];
const todosLosPaises = [...paises1, ...paises2];
console.log(todosLosPaises);


//Conteo tamaño del arreglo
console.log("Número de elementos:", paises1.length);
console.log("Número de elementos:", paises2.length);
console.log("Número de elementos:", todosLosPaises.length);