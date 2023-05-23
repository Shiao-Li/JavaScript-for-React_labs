'use strict';

let canciones = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen"
    },
    {
        titulo: "Hotel California",
        artista: "Eagles"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon"
    },
    {
        titulo: "Hey Jude",
        artista: "The Beatles"
    }
];

// metodo push (agrega al final) - unshift (agrega al final)
console.log("\nPush- agrega al final | unshift - agrega al inicio");
canciones.push({ titulo: "Stairway to Heaven", artista: "Led Zeppelin" });
console.log(canciones);

canciones.unshift({ titulo: "Smells Like Teen Spirit", artista: "Nirvana" });
console.log(canciones);

//Método pop y shift
console.log("\nPop - elemina el ultimo | shift - Elimina primer elemento");
let ultimaCancion = canciones.pop();
console.log(ultimaCancion);

let primeraCancion = canciones.shift();
console.log(primeraCancion);

// metodo find y findex
console.log("\nfind - buscar une elemento | findindex - indice del elemento");
let cancionEncontrada = canciones.find(cancion => cancion.titulo === "Imagine");
console.log(cancionEncontrada);

let indiceCancion = canciones.findIndex(cancion => cancion.titulo === "Imagine");
console.log(`El elemento esta en el indice : ${indiceCancion}`);

// metodo filter
console.log("\n filter - filtrar elementos");
let cancionesQueen = canciones.filter(cancion => cancion.artista === "Queen");
console.log(cancionesQueen);

// metodo concat
console.log("\nconcat - conbina arreglos");
let canciones2 = [
    { titulo: "November Rain", artista: "Guns N' Roses" },
    { titulo: "Don't Stop Believin'", artista: "Journey" }
];
let cancionesCombinadas = canciones.concat(canciones2);
console.log(cancionesCombinadas);

// Metodo includes
console.log("\nincludes - verificacion de un elemento");
let incluyeGuns = canciones.includes(["Journey"]);
console.log(incluyeGuns);

// metodo some
console.log("\nsome - Si al menos hay");
let numeros = [1, 2, 3, 4, 5];

let hayNumerosPares = numeros.some(numero => numero % 2 === 0);
console.log(hayNumerosPares);

// metodo every
console.log("\nevery- si todos los elementos son ...");
let todosMayoresACero = numeros.every(numero => numero > 0);
console.log(todosMayoresACero);

// metodo reverse
console.log("\nreverse - invirte el orden");
console.log(numeros);
numeros.reverse();
console.log(numeros);

// metodo sort
console.log("\nsort - orden descendente");
let numeros1 = [5, 2, 8, 1, 4];

console.log(numeros1);
numeros1.sort();
console.log(numeros1);

// metodo reduce
console.log("\n reduce - combinar o reducir elementos");

let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`La suma de ${numeros} es --> ${suma}`); 
