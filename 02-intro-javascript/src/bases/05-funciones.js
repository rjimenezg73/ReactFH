// Funciones en JS

/*
function Saludar(nombre){
  return `Hola, ${nombre}`;
};
*/
// Ésta no es la mejor manera de crear una función ya que podemos pisar su referencia. La mejor
// manera es usando una constante que apunte a dicha función, ejemplo

const Saludar = function(nombre){
  return `Hola, ${nombre}`;
}

// ¿Qué sucede o que diferencia hay?
// usando la primera forma podemos asignar un nuevo valor al identificador de la función y solo
// nos indicará un warnig. Usando una constante nos quiebra el programa con un error haciendo
// así imposible cometer un error inesperado

console.log(Saludar('Goku'));

// Funciones de flecha o también conocidas como arrow function

const Saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

console.log(Saludar2('Vegeta'));

function getUsuarioActivo(nombre){
  return{
    uid: 'ABC567',
    username: nombre,
  }
};

const getUsuarioActivo2 = (nombre) => (
  {
    uid: 'DEF789',
    username: nombre,
  })

let usuarioActivo = getUsuarioActivo('Roberto');
console.log(usuarioActivo);

usuarioActivo = getUsuarioActivo2('Peter');
console.log(usuarioActivo);