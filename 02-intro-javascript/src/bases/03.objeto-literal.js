const persona = {
  nombre: 'Tony',
  apellido: 'Starck',
  edad: 42,
  direccion: {
    ciudad: 'New York',
    zip: 556,
    lat: 14.3232,
    lng: 34.1234,
  }
};

// console.table(persona);
console.log(persona);

const persona2 = persona;

persona2.nombre = 'Roberto';
// Lo anterior no es correcto porque no se clona el objeto, se hace referencia
// al mismo espacio de memoria
// Lo mejor es clonar con el operador spread(...)
const persona3 = {...persona};
persona3.nombre = 'Peter';

console.log(persona);
console.log(persona2);
console.log(persona3);