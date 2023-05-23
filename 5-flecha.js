'use strict'
// uso funcion flecha
const calcularIVA = (precio, tasaIVA) => precio * tasaIVA / 100;

const precioProducto = 20;
const tasaIVA = 12;

const iva = calcularIVA(precioProducto, tasaIVA);

console.log("El IVA es: " + iva);

//el uso del return en funciones flecha
const calcularIVA1 = (precio, tasaIVA) => {
    return precio * tasaIVA / 100;
  };
  
  const precioProducto1 = 100;
  const tasaIVA1 = 12;
  
  const iva1 = calcularIVA1(precioProducto1, tasaIVA1);
  
  console.log("El IVA es: " + iva1);