function esperar(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function procesoAsincrono() {
    console.log('Iniciando proceso...');
    
    await esperar(2000); // Esperar 2 segundos
    
    console.log('Proceso completado.');
  }
  
  procesoAsincrono();
  console.log('El proceso está en curso...');
  