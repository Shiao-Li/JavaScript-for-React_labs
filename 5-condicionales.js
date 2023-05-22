// Condicional simple

'use strict'

const edad = 25;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// Condicional doble

const edad1 = 17;

if (edad1 >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}


// Condicional anidada

const edad2 = 16;

if (edad2 >= 18) {
  console.log("Eres mayor de edad");
} else if (edad2 >= 13) {
  console.log("Eres adolescente");
} else {
  console.log("Eres niño/a");
}


//Condicional multiple

const diaSemana = "Lunes";

switch (diaSemana) {
  case "Lunes":
    console.log("Hoy es lunes");
    break;
  case "Martes":
    console.log("Hoy es martes");
    break;
  case "Miércoles":
    console.log("Hoy es miércoles");
    break;
  case "Jueves":
    console.log("Hoy es jueves");
    break;
  case "Viernes":
    console.log("Hoy es viernes");
    break;
  default:
    console.log("Es fin de semana");
    break;
}
