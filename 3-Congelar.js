// Freeze
/* 
'use strict';

const persona = {
    nombre: "Roberto",
    edad: 21
};

Object.freeze(persona);

persona.nombre = "Pedro";
persona.edad = 25;

console.log(persona); */

//Seal
'use strict';

const persona = {
    nombre: "Roberto",
    edad: 21
};

Object.seal(persona);

persona.nombre = "Pedro";
persona.edad = 25;

persona.ciudad = "Quito";
delete persona.edad;

console.log(persona);

