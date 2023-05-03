// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes);

const [f1] = personajes;

console.log(f1);

// Para obtener solo el tercer valor del arreglo:
const [ , ,f3] = personajes;
console.log(f3);

const retornaArreglo = () => {
  return ['ABC', 123];
}

arr = retornaArreglo();
console.log(arr);
const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

const useState = (valor) => {
  return [valor, () => {
    console.log('Hola Mundo');
  }];
};

const arr2 = useState('Goku');
console.log(arr2);
arr2[1]();

// TAREA
/*
1. El primer valor del arr3  se llamará nombre
2. El segundo se llamará setNombre
 */

const [nombre, setNombre] = useState('Roberto');
console.log(nombre);
setNombre();