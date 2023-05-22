// Clave:valor 

'use strict'
const persona = {
    nombre: "Roberto",
    edad: 21,
    ciudad: "Quito",
    animales: {
        mascotas: ['Hachiko', 'Kaiser', 'osito'],
        obtenerUltimaMascota: function () {
            return this.mascotas[1];
        }
    }
};

const claves = Object.keys(persona);
console.log(claves);
console.log('Roberto vive en la ciudad: ' + persona.ciudad);
console.log(`Su última mascota se llama ${persona.animales.obtenerUltimaMascota()}`);

// Agregar y eliminar

console.log();

persona.ciudad = "Quito";
persona['profesion'] = "Tecnologo";

console.log(persona);

delete persona.ciudad;
delete persona['profesion'];

console.log(persona);


