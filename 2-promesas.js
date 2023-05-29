function sumar(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('Los argumentos deben ser números');
      } else {
        const resultado = a + b;
        resolve(resultado);
      }
    });
  }
  
  sumar(2, 3)
    .then(resultado => {
      console.log('El resultado de la suma es:', resultado);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  