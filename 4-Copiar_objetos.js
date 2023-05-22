// Spread operator

'use strict';

const persona = {
    nombre: "Roberto",
    edad: 21,
    ciudad: "Quito"
};


const personaModificada = { ...persona };

personaModificada.nombre = "Pedro";
personaModificada.edad = 25;

const personaModificada2 = {...persona};

personaModificada2.nombre = "Juan"
personaModificada2.edad = 30
personaModificada2.ciudad = "Loja"

console.log(persona);
console.log(personaModificada);
console.log(personaModificada2)
