// Recorrer array con for

'use strict';

const paises1 = ["España", "Francia", "Italia", "Ecuador"];
for (let i = 0; i < paises1.length; i++) {
    console.log(paises1[i]);
}

console.log()

// For Each
paises1.forEach(function (paises1) {
    console.log(paises1);
});

console.log();

// map
const paises = [
    {
        nombre: "Brasil",
        continente: "América del Sur"
    },
    {
        nombre: "Argentina",
        continente: "América del Sur"
    },
    {
        nombre: "Francia",
        continente: "Europa"
    },
    {
        nombre: "España",
        continente: "Europa"
    },
    {
        nombre: "México",
        continente: "América del Norte"
    }
];

const nombresPaises = paises.map(pais => pais.continente);
console.log(nombresPaises);


