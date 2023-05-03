// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//console.log(persona);

const {nombre} = persona;
console.log(nombre);

// Renombrando nombre por nombre2
const {nombre:nombre2} = persona;
console.log(nombre2);

const {nombre:nombre3, edad, clave} = persona;
console.log(nombre3);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
  //console.log(usuario);
  const {edad, nombre, clave} = usuario;
  console.log(nombre);
  console.log(edad);
  console.log(clave);
};

retornaPersona(persona); 

const retornaPersona2 = ({nombre, edad, clave}) => {
  console.log(nombre);
  console.log(edad);
  console.log(clave);
}

retornaPersona2(persona);