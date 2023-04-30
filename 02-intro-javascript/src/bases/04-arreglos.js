// Arreglos en JS

const arreglo = new Array();  // Esta no es la mejor forma de declarar arreglos
                              /* Esta forma se usa cuando se sabe la longitus del
                                arreglo que vamos a utilizar, como por ejemplo:

                                const arreglo = new Array( 100 );

                                Estamos diciendo que estamos declarando un arreglo vacío
                                de 100 posiciones */
const arregloCorrecto = [];

arregloCorrecto.push(1);
arregloCorrecto.push(2);
arregloCorrecto.push(3);
arregloCorrecto.push(4);

console.log(arreglo);
console.log(arregloCorrecto);

// Es mejor usar spread operator que push
let arregloCorrecto2 = arregloCorrecto;
arregloCorrecto.push(5);

console.log("arregloCorrecto", arregloCorrecto);
console.log("arregloCorrecto2", arregloCorrecto2);

// Con spread operator
// El operador spread no hce referencia a la memoria, si no que copia el valor de cada uno de los elementos

let arregloCorrecto3 = [...arregloCorrecto, 6,7,8,9,10];
console.log("arregloCorrecto", arregloCorrecto);
console.log("arregloCorrecto3", arregloCorrecto3);

const arreglo2 = arregloCorrecto.map(function(numero){
  return numero * 2;
});

console.log(arreglo2);
