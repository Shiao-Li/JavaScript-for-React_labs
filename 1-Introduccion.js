// uso y reutilizacion
'use strict'

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  saludar("Juan");
  saludar("María");
  saludar("Carlos");

//   Declaras y expresadas

// Función declarada
function saludarDeclarada(nombre) {
    console.log("¡Hola, " + nombre + ", esta es una funcion declarada)");
  }
  
  saludarDeclarada("Roberto");
  
  // Función expresada
  const saludarExpresada = function(nombre) {
    console.log("¡Hola, " + nombre + ", esta es una funcion expresada");
  };
  
  saludarExpresada("Roberto");
  