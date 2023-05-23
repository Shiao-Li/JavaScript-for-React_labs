'use strict'

const obtenerEdad = function () {
    console.log("Mi edad es " + this.edad);
}

const persona3 = {
    edad: 30,
    obtenerEdad: obtenerEdad
};

persona3.obtenerEdad();