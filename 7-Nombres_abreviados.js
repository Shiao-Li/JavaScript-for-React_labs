// ES6

'use strict'

const nombre = "Roberto";
const edad = 21;

const persona = {
    nombre,
    edad,
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
};

persona.saludar();