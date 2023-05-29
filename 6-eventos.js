// click
const boton = document.getElementById('miBoton');
boton.addEventListener('click', () => {
  console.log('Se hizo clic en el botón');
});

// mouseout
const elemento = document.getElementById('miElemento');
elemento.addEventListener('mouseout', () => {
  console.log('El mouse salió del elemento');
});

// input
const inputElement1 = document.getElementById('myInput');
inputElement.addEventListener('input', (event) => {
  const valor = event.target.value;
  console.log('Se ha modificado el valor:', valor);
});

// submit
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Se envió el formulario');
});

// keypress
const inputElement = document.getElementById('myInput');
inputElement.addEventListener('keypress', (event) => {
  const tecla = event.key;
  console.log('Se ha presionado la tecla:', tecla);
});

