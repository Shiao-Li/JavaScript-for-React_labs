// for

for (let i = 1; i <= 10; i++) {
    console.log(`Iteración ${i}`);
  }
  
// While

let contador = 0;

console.log();
while (contador <= 5) {
  console.log(`Iteración ${contador}`);
  contador++;
}

// do while

let contador2 = 0;

console.log();

do {
  console.log(`Iteración ${contador2}`);
  contador2++;
} while (contador2 < 5);


// forEach - forof - forin - map 
const frutas = ["manzana", "banana", "naranja"];


console.log("\nfor Each");
frutas.forEach(fruta => {
  console.log(fruta);
});


console.log("\nfor of:");
for (const fruta of frutas) {
  console.log(fruta);
}


console.log("\nfor in");
for (const index in frutas) {
  console.log(frutas[index]);
}


console.log("\nmap:");
const resultadoMap = frutas.map(fruta => fruta.toUpperCase());
console.log(resultadoMap);

