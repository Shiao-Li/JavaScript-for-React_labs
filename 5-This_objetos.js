// this con objetos

'use strict'

const persona = {
    nombre: "Roberto",
    edad: 21,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
  };
  
  persona.saludar();
  
