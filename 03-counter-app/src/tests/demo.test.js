// describe es un agrupador general que me permite establecer nombre a mis pruebas y el el test viene 
// la descripcion  a nivel individual de cada prueba

describe('Pruebas en el archivo demo.test.js', () => {

  
  test('Deben de ser iguales los strings...', () => {
  
    // 1. Inicialización - Preparación de lo que queremos hacer 
    const mensaje = 'Hola Mundo!';
  
    // 2. Estímulo
    const mensaje2 = `Hola Mundo!`;
  
    // 3. Observar el comportamiento - Afirmaciones de lo que espero que suceda
    expect(mensaje).toBe(mensaje2);   // ===
  
  });


});
