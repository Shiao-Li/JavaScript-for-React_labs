// Metodos para los obejtos

'use strict'
const persona = {
    nombre: "Roberto",
    edad: 21,
    ciudad: "Quito"
};

const claves = Object.keys(persona);
console.log(claves);

const valores = Object.values(persona);
console.log(valores);

const entradas = Object.entries(persona);
console.log(entradas);

