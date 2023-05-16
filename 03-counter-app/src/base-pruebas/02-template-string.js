const nombre = "Roberto";
const apellido = "Jiménez";
// const nombreCompleto = nombre + ' ' + apellido;

// Uso de Backtik / Back Quote
// También conocido como Templete String

const nombreCompleto = `${nombre} ${apellido}`;

//console.log(nombreCompleto);

export function getSaludo(nom = "Carlos!"){
  return 'Hola ' + nom;
}

//console.log(`Éste es un texto: ${getSaludo(nombre)}`);