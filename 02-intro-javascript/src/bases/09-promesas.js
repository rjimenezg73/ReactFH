// Promesas

import { getHeroeById } from "./bases/08-import-export";

// Las promesas por naturaleza son asíncronas, es decir, primero se va a ejecutar todo el código
// que es síncrono y las promesas quedan en un lugar especial de la pila de trabajo de JS
// Al terminar todo lo síncrono sigue la ejecuci+on de las promesas

/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3 segundos después...');
    const heroe = getHeroeById(2);
    //console.log(heroe);
    resolve(heroe);
    //reject('No se pudo encontrar el héroe...')
  }, 3000);
});

promesa.then((elNombreNoImporta) => {
  console.log(elNombreNoImporta);
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 segundos después...');
      const heroe = getHeroeById(id);
      heroe !== undefined 
        ? resolve(heroe)
        : reject('No se pudo encontrar el héroe...');
    }, 2000);
  });
}

getHeroeByIdAsync(3)
  .then(heroe => console.log('Heroe: ', heroe))
  .catch(err => console.warn(err))

