// uso del rest
'use strict'

let marcasCarros = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];

let [primeraMarca, segundaMarca, ...rest] = marcasCarros;

console.log(primeraMarca);
console.log(segundaMarca);
console.log(rest);