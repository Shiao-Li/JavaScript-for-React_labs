function obtenerDatos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('¡Datos obtenidos!');
      }, 2000);
    });
  }
  
  async function mostrarDatos() {
    try {
      const resultado = await obtenerDatos();
      console.log(resultado);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  mostrarDatos();
  